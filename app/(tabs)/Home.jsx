import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  RefreshControl,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import Vidsearch from "../../components/Vidsearch";
import Trending from "../../components/Trending";
import Empty from "../../components/Empty";
import { useEffect, useState } from "react";
import { getAllpost, getlatest } from "../../lib/appwrite";
import Appwritehook from "../../lib/Appwritehook";
import Videostyle from "../../components/Videostyle";
import { useGlobalContext } from "../../context/GlobalProvider";


const Home = () => {
  const {user, setuser , setIsLogged}=useGlobalContext();
  const { data: posts, refetch } = Appwritehook(getAllpost);
  const { data: latestPosts } = Appwritehook(getlatest);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={posts}
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
            <View className="justify-between flex-row ml-2 mr-2">
              <View className="m-[8px] mt-[25px]">
                <Text className="text-xl ">Welcome Back</Text>
                <Text className="text-[30px]  font-extrabold">
                  {user?.username}
                </Text>
              </View>
              <View>
                <Image
                  className="h-[100px] w-[120px] "
                  source={images.Flicklogo}
                  resizeMode="cover"
                />
              </View>
            </View>
            <View className="bg-black">
            <Vidsearch className="" />
              <Text className="text-2xl text-[#F1C40F] m-2 ml-4 mt-4 underline">Latest Videos</Text>
              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Empty
            title="No Videos Available"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <StatusBar style="dark" backgroundColor="#F1C40F" />
    </SafeAreaView>
  );
};

export default Home;
