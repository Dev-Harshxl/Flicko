import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import icons from "../constants/icons";
import { router, usePathname } from "expo-router";
import { useState } from "react";

const Vidsearch = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View className="items-center h-[60px] w-[98%] bg-black-200 rounded-[45px] mt-3 `ml-[1%] flex-row">
      <TextInput
        className="flex-1 text-[#ffffff] text-[20px]   ml-4 font-bold "
        value={query}
        onChangeText={(e) => setQuery(e)}
        placeholder="search for a video"
        placeholderTextColor="#F1C40F"
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image
          source={icons.search}
          resizeMode="contain"
          className="h-[20px] w-[30px] m-4"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Vidsearch;
