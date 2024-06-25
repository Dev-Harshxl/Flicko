import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, name, color }) => {
  return (
    <View className="items-center justify-center">
      <Image source={icon} className="w-6 h-6 color-white" tintColor={color} />
      <Text>{name}</Text>
    </View>
  );
};

const Tablayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#161622",
          tabBarStyle: { backgroundColor: "#d9d9d9" },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            // title:"Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon icon={icons.home} name="Home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon icon={icons.plus} name="Create" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon icon={icons.bookmark} name="Bookmark" color={color} />
            ),
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon icon={icons.profile} name="Profile" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Tablayout;
