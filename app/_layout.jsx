import { Text, View } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

const _layout = () => {

  const [fontloader, error] = useFonts({
    "Poppins": require("../assets/fonts/Poppins-Black.ttf")
  });

  useEffect(() => {

    if (error) throw error;
    if (fontloader) SplashScreen.hideAsync();
  } , [fontloader, error]);

  if (!fontloader) return null;

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default _layout;
