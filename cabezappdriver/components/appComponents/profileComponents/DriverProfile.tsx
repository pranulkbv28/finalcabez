import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import driverData from "@/data/driverData";

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

const driverProfile = () => {
  const selectedTab = useSelector((state: any) => state.tab.profileTab);
  const [data, setData] = useState<DriverDataType>(
    driverData
  );

  return (
    <View>
      <Text>Driver Data: {JSON.stringify(data)}</Text>
    </View>
  );
  
};
export default driverProfile;
