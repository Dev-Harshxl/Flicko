import { Text, View } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import GlobalProvider from "../context/GlobalProvider";

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
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
};

export default _layout;
