import {Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";



const index = () => {

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text  className="text-3xl color-white" style={{fontFamily:"Poppins-Black"}}>Flicko</Text>
      <Link href="./profile" className="color-reddy">Click to visit Profile</Link>
    </View>
  );
};

export default index;
