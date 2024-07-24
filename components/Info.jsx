import { View, Text } from 'react-native'

const Info = ({ title, subtitle, containerStyles, titleStyles }) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center  ${titleStyles}`}>
        {title}
      </Text>
      <Text className="text-sm text-gray-100 text-center ">
        {subtitle}
      </Text>
    </View>
  );
};
export default Info