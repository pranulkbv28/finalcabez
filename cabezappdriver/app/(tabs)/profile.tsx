import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setProfileTab } from "@/features/profileTab/profileTabSlice";
import ProfileComponent from "@/components/appComponents/profileComponents/ProfileComponent";

const profile = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => dispatch(setProfileTab("personal"))}
          style={styles.tab}
        >
          <Text style={styles.tabText}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(setProfileTab("driver"))}
          style={styles.tab}
        >
          <Text style={styles.tabText}>My Driver</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <ProfileComponent />
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    display: "flex",
    flexDirection: "column",
  },
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    // padding: 16,
    justifyContent: "flex-start",
    gap: 10,
    marginBottom: 30,
  },
  tab: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  tabText: {
    color: "black",
    fontStyle: "italic",
  },
  profileContainer: {},
});
