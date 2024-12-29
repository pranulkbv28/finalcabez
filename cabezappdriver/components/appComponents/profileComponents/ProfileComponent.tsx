import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import personalData from "@/data/personalData";
import driverData from "@/data/driverData";

type PersonalDataType = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
};

type DriverDataType = {
  id: string;
  name: string;
  age: number;
  licenseNumber: string;
  vehicleType: string;
  rating: number;
  tripsCompleted: number;
  availability: boolean;
};

const ProfileComponent = () => {
  const selectedTab = useSelector((state: any) => state.tab.profileTab);
  const [data, setData] = useState<PersonalDataType | DriverDataType>(
    personalData
  );

  useEffect(() => {
    console.log("Selected Tab:", selectedTab);
    if (selectedTab === "personal") {
      setData(personalData);
    } else if (selectedTab === "driver") {
      setData(driverData);
    }
  }, [selectedTab]);

  return (
    <View>
      <Text>Selected Tab: {selectedTab}</Text>
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};

export default ProfileComponent;
