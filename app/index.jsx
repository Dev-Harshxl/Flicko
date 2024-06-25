import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { router } from "expo-router";
import But from "../components/But";
import { StatusBar } from "expo-status-bar";
import AnimatedCharacter from "../components/AnimatedCharacter";

const Index = () => {

  return (
    <SafeAreaView className="bg-[#F1C40F] h-full">
    <ScrollView
      contentContainerStyle={{
        height: "100%",
      }}
    >
      <View className="min-h-[85vh] items-center w-full px-4">
        <Image
          source={images.Flicklogo}
          className="w-full h-[200px]"
          resizeMode="contain"
        />
        <View className="w-full justify-center items-center">
          <Text className="text-2xl mt-5 color-[#000] font-extrabold">
            Flick It, Watch It, Love It
          </Text>
          <Image className="w-[250px] top-[-2px]" source={images.path}></Image>
          <Text className="text-xl mt-5 font-Poppins color-[#000] font-extrabold">
            High-quality entertainment for <Text>everyone.</Text>
          </Text>
        </View>

        <AnimatedCharacter />

        <But title="Continue with E-mail" handlePress={()=>router.push('/signin')} containerstyle="absolute bottom-[0]" />
      </View>
    </ScrollView>
    <StatusBar style="dark" backgroundColor="#161622" />
  </SafeAreaView>
  );
};

export default Index;
