import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import personalData from "@/data/personalData";

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

const ParentProfile = () => {
  // const selectedTab = useSelector((state: any) => state.tab.profileTab);
  const [data, setData] = useState<PersonalDataType>(
    personalData
  );


  return (
    <View>
      <Text>Parent Data: {JSON.stringify(data)}</Text>
    </View>
  );
};

export default ParentProfile;
