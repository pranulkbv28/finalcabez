// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import { useDispatch } from "react-redux";
// import DriverProfile from "@/components/appComponents/profileComponents/DriverProfile";
// import ParentProfile from "@/components/appComponents/profileComponents/ParentProfile";
// import { SafeAreaView } from "react-native-safe-area-context";

// const [parentTabOpen, setParentTabOpen] = useState(false);
// const [driverTabOpen, setDriverTabOpen] = useState(false);

// const handlePress = (tab) => {
//   switch (tab) {
//     case "parent":
//       setParentTabOpen(!parentTabOpen);
//       break;
//     case "driver":
//       setDriverTabOpen(!driverTabOpen);
//       break;
//     default:
//       console.log("Invalid tab.");
//   }
// };

// const profile = () => {
  
//   const dispatch = useDispatch();

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.tabContainer}>
//         <TouchableOpacity
//           onPress={() => handlePress("parent")}          
//           style={styles.tab}
//         >
//           <Text style={styles.tabText}>My Details</Text>

//           <View style={styles.parentProfileContainer}>
//             {parentTabOpen && <ParentProfile />}
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => handlePress("driver")}          
//           style={styles.tab}
//         >
//           <Text style={styles.tabText}>My Driver Details</Text>
//           <View style={styles.driverProfileContainer}>
//             {driverTabOpen && <DriverProfile/>}
//           </View>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default profile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     display: "flex",
//     flexDirection: "column",
//   },
//   tabContainer: {
//     display: "flex",
//     flexDirection: "column",
//     padding: 16,
//     justifyContent: "flex-start",
//     gap: 30,
//     margin: 25,
//   },
//   tab: {
//     padding: 5,
//     backgroundColor:"orange",
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "black",
//   },
//   tabText: {
//     color: "black",
//     textAlign:'center',
//     fontStyle: "italic",
//   },
//   parentProfileContainer: {
//     padding: 10,
//     backgroundColor:"white",
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "black",},
//   driverProfileContainer: {
//     padding: 10,
//     backgroundColor:"white",
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "black",},
// });



import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import DriverProfile from "@/components/appComponents/profileComponents/DriverProfile";
import ParentProfile from "@/components/appComponents/profileComponents/ParentProfile";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  const [parentTabOpen, setParentTabOpen] = useState(false);
  const [driverTabOpen, setDriverTabOpen] = useState(false);

  type Tab = "parent" | "driver";
  const handlePress = (tab: Tab) => {
    switch (tab) {
      case "parent":
        setParentTabOpen(!parentTabOpen);
        break;
      case "driver":
        setDriverTabOpen(!driverTabOpen);
        break;
      default:
        console.log("Invalid tab.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handlePress("parent")} style={styles.tab}>
          <Text style={styles.tabText}>My Details</Text>
          <View style={styles.parentProfileContainer}>
            {parentTabOpen && <ParentProfile />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("driver")} style={styles.tab}>
          <Text style={styles.tabText}>My Driver Details</Text>
            {driverTabOpen && <DriverProfile/>}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    display: "flex",
    flexDirection: "column",
  },
  tabContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    justifyContent: "flex-start",
    gap: 30,
    margin: 25,
  },
  tab: {
    padding: 5,
    backgroundColor:"orange",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  tabText: {
    color: "black",
    textAlign:'center',
    fontStyle: "italic",
  },
  parentProfileContainer: {
    padding: 10,
    backgroundColor:"white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",},
  driverProfileContainer: {
    padding: 10,
    backgroundColor:"white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",},
});

export default profile;