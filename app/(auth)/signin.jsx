import { View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormComponent from "../../components/FormComponent"
import { useState } from "react";
import But from "../../components/But"
import { Link } from "expo-router";

const signin = () => {
  const [form, setform]=useState({
    email: "",
    password: ""

  })
  return (
    <SafeAreaView className="bg-[#F1C40F] h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="min-h-[85vh] items-center w-full px-4">
          <Image source={images.Flicklogo} className="h-[200] w-[150]" />
          <Text className="text-2xl  font-extrabold text-[#000080] mb-[30]">Log In to Flicko</Text>

          <FormComponent
          title="E-mail"
          value={form.email}
          handle={(e)=>setform({...form ,email:e})}
          keyboardType="email-address"
          />

          <FormComponent
          title="Password"
          value={form.password}
          handle={(e)=>setform({...form ,password:e})}
          keyboardType="password"
          />


          <But
            title="Log In"
            containerstyle="w-[150] h-[45] mt-[50px]"
          />


          <View className="h-[50] w-[300] items-center justify-center mt-[40]">
            <Text className="text-[20px]">Don't have an Account ?</Text>
            <TouchableOpacity>
              <Text className="text-[22px] text-[#000080] font-extrabold mt-[5]">
              <Link href='/signup'>Create One</Link>
              </Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;
