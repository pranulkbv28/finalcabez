import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Tabs } from "expo-router";
import * as Location from "expo-location";
import Colors from "@/constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigationContainerRef } from "@react-navigation/native";

export default function TabLayout() {
  const [location, setLocation] = useState<{
    latitude: number | null;
    longitude: number | null;
  }>({
    latitude: null,
    longitude: null,
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    const getLocationUpdates = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 1, // Update location on every move
        },
        (newLocation) => {
          setLocation({
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
          });
        }
      );
    };

    getLocationUpdates();
  }, []);

  useEffect(() => {
    const unsubscribe = navigationRef.addListener("state", () => {
      console.log("Current route:", navigationRef.getCurrentRoute());
    });

    return unsubscribe;
  }, [navigationRef]);

  return (
    <View style={styles.container}>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor: Colors.light.tint,
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color="orange" />
            ),
          }}
        />
        <Tabs.Screen
          name="attendance"
          options={{
            title: "Attendance",
            tabBarIcon: ({ color }) => (
              <Entypo name="paper-plane" size={24} color="orange" />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "My Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="person" size={24} color="orange" />
            ),
          }}
        />
        <Tabs.Screen
          name="contactus"
          options={{
            title: "Contact Us",
            tabBarIcon: ({ color }) => (
              <Entypo name="phone" size={24} color="orange" />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
  },
  locationContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  locationText: {
    fontSize: 14,
    color: "#333",
  },
  errorText: {
    fontSize: 14,
    color: "red",
  },
});
