import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "../constants";
import { useState } from "react";
import { Video, ResizeMode } from "expo-av";

const Videostyle = ({ title, user, avatar, thumbnail, video }) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex flex-col items-center p-1 pb-3 mb-14 bg-black-100">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-primary justify-center items-center ml-3 mt-3">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg "
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1 mt-3">
            <Text
              className="text-white font-semibold text-sm "
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text className="text-xs text-white" numberOfLines={1}>
              {user}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} className="h-5 w-5" resizeMode="contain" />
        </View>
      </View>

      {play ? (
        <Video 
        source={{uri: video}}
        className="w-full h-60"
        shouldPlay
        useNativeControls
        />
      ) : (
        <TouchableOpacity
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
          activeOpacity={0.9}
          onPress={() => setPlay(true)}
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Videostyle;
