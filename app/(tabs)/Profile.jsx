import { StatusBar } from "expo-status-bar";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Empty from "../../components/Empty";
import { getUserPosts,signOut } from "../../lib/appwrite";
import Appwritehook from "../../lib/Appwritehook";
import Videostyle from "../../components/Videostyle";
import { useGlobalContext } from "../../context/GlobalProvider";
import { icons } from "../../constants";
import Info from "../../components/Info";
import { router } from "expo-router";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: posts } = Appwritehook(() => getUserPosts(user.$id));

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/signin");
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
          <View className="mt-6 w-full justify-center items-center mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logout}
            >
              <Image
                source={icons.logout}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] "
                resizeMode="cover"
              />
            </View>

            <Info
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />
            <View className="mt-5 flex flex-row">
              <Info
                title={posts.length || 0}
                subtitle="Posts"
                titleStyles="text-xl"
                containerStyles="mr-10"
              />
              <Info
                title="1.2k"
                subtitle="Followers"
                titleStyles="text-xl"
              />
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

export default Profile;
