import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { useMutation, gql } from "@apollo/client";
import customMarkerIcon from "@/assets/images/marker.jpg";

// Define a constant userId
const USER_ID = "12345678-1234-1234-1234-1234567890ab"; // Replace with your desired constant UUID



// Update location mutation
const UPDATE_LOCATION = gql`
  mutation UpdateLocation($userId: String!, $latitude: numeric!, $longitude: numeric!) {
  insert_locations_one(
    object: { user_id: $userId, latitude: $latitude, longitude: $longitude },
    on_conflict: {
      constraint: locations_pkey,
      update_columns: [latitude, longitude, updated_at]
    }
  ) {
    id
    updated_at
  }
}
`;


const Home: React.FC = () => {
  const [location, setLocation] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null,
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [updateLocation] = useMutation(UPDATE_LOCATION);

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // Request location updates
      const locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 1, // Updates every 1 meter
        },
        (newLocation) => {
          const { latitude, longitude } = newLocation.coords;

          setLocation({ latitude, longitude });

          // Update location in the backend using the constant userId
          updateLocation({
            variables: {
              userId: USER_ID, // Use the constant userId here
              latitude,
              longitude,
            },
          })
            .then(() => {
              console.log("Location updated successfully!");
            })
            .catch((error) => {
              console.error("Error updating location:", error);
            });
        }
      );

      return () => {
        if (locationSubscription) {
          locationSubscription.remove();
        }
      };
    };
    getLocation();
  }, [updateLocation]);

  return (
    <View style={styles.container}>
      {location.latitude && location.longitude ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        >
          <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} title="Your Location"
            image={customMarkerIcon}
          />
        </MapView>
      ) : (
        <View style={styles.loading}>
          <Text style={errorMsg ? styles.errorText : styles.loadingText}>
            {errorMsg || "Loading location..."}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1, // Makes the map take the entire screen
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "gray",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});

export default Home;
