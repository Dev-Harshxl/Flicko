import { StyleSheet, Text, View } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

const _layout = () => {
  const[fontloader, error]=useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf")
  })
  useEffect(()=>{
    if(error) throw error;
    if(fontloader) SplashScreen.hideAsync();
    if(!fontloader) return null;
  })
  return (
    //    <Slot/>
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default _layout;
