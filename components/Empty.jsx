import { View, Text } from "react-native";
import Loader from "./Loader";
import But from "./But";

const Empty = ({ title, subtitle,containerstyle }) => {
  return (
    <View className={`justify-center items-center `}>
      <Loader />
      <Text className="text-3xl font-extrabold">{title}</Text>
      <Text className="text-[16px] font-bold mt-2">{subtitle}</Text>
      <View className={`${containerstyle}`}> 
      <But title="Create One" />
      </View>
    </View>
  );
};

export default Empty;
