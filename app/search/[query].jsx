import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Vidsearch from "../../components/Vidsearch";
import Empty from "../../components/Empty";
import { useEffect, useState } from "react";
import { searchPosts } from "../../lib/appwrite";
import Appwritehook from "../../lib/Appwritehook";
import Videostyle from "../../components/Videostyle";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: post, refetch } = Appwritehook(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={post}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Videostyle
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video.video}
            user={item.users.username}
            avatar={item.users.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className="bg-[#F1C40F]">
            <View className="m-[8px] mt-[25px]">
              <Text className="text-xl ">Search Results for</Text>
              <Text className="text-[30px]  font-extrabold">{query}</Text>
              <Vidsearch className="w-full" initialQuery={query} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Empty
            title="No Videos Available"
            subtitle="Be the first one to upload a video"
          />
        )}
      />
      {/* <Text className="text-white">{query}</Text> */}
      <StatusBar style="dark" backgroundColor="#F1C40F" />
    </SafeAreaView>
  );
};

export default Search;
