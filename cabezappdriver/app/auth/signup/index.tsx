import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { router, useNavigation, useRouter } from "expo-router";
import cabezLogo from "@/assets/images/cabezLogo.png";

const Index = () => {
  const navigation = useNavigation();
  // const router = useRouter()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image source={cabezLogo} />
        </View>
        <Text style={styles.header}>Sign Up</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Sign Up</Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/(tabs)/home")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Go To Home</Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Pressable onPress={() => router.push("/auth/login" as any)}>
          <Text style={styles.link}>Login</Text>
        </Pressable>
      </Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  innerContainer: {
    // backgroundColor: "red",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  header: {
    fontSize: 24,
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    marginTop: 40,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#a5a5a5",
    borderRadius: 40,
    paddingHorizontal: 26,
    paddingVertical: 20,
    color: "#a5a5a5",
  },
  btn: {
    width: "80%",
    backgroundColor: "#3f97e8",
    padding: 16,
    borderRadius: 40,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  footerText: {
    textAlign: "center",
    fontFamily: "PoppinsBold",
  },
  link: {
    color: "#3f97e8",
  },
});
