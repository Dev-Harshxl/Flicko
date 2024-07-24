import {
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Empty from "./Empty";
import * as Animatable from "react-native-animatable";
import { useState } from "react";
import { icons } from "../constants";
import { Video, ResizeMode } from "expo-av";
// import Video, {VideoRef} from 'react-native-video';

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};
const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingPost = ({ activePost, item }) => {
  const [play, setPlay] = useState(false);
  return (
    <Animatable.View
      className="mr-5"
      animation={activePost === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className="w-52 h-72 rounded-[33px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center ml-[-8] mr-[-10]"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[40px] overflow-hidden shadow shadow-black/40"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute bg-black rounded-[16px] overflow-hidden "
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [activePost, setactivePost] = useState(posts[0]);

  const viewableItemschanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setactivePost(viewableItems[0].key);
    }
  };

  return (
    <View className="mt-5 mb-8 mr-4 ml-2">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <TrendingPost activePost={activePost} item={item} />
        )}
        ListEmptyComponent={() => (
          <Empty title="No Videos Available" containerstyle="hidden" />
        )}
        horizontal
        scroll
        onViewableItemsChanged={viewableItemschanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70,
        }}
        contentOffset={{ x: 170 }}
      />
    </View>
  );
};

export default Trending;
