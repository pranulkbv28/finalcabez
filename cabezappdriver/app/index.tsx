import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import cabezLogo from "@/assets/images/cabezLogo.png";
import driverImg from "@/assets/images/driverImg.png";
import { useRouter, useNavigation } from "expo-router";

const Index = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={cabezLogo} />
      </View>
      <View style={styles.driverImgContainer}>
        <Image source={driverImg} />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  logoContainer: {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  driverImgContainer: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});
