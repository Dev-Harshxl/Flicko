import { View, Text, Image } from "react-native";
import { Tabs, Redirect,Stack } from "expo-router";
import { icons } from "../../constants";


const TabIcon = ({ icon, name, color }) => {
  return (
    <View className="items-center justify-center " style={{height:"30px"}}>
      <Image source={icon} className="w-[30px] h-[30px] mt-[12px] p-[6px] color-white" tintColor={color} />
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
          tabBarInactiveTintColor: "#ffffff",
          tabBarStyle: { backgroundColor: "black" },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            // title:"Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon icon={icons.home} name="Home" color={color}  />
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
