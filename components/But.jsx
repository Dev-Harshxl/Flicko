import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const But = ({title, handlePress, containerstyle}) => {
  return (
   <TouchableOpacity 
   onPress={handlePress}
   activeOpacity={0.7}
   className={`h-[60] w-[270] rounded-2xl bg-black items-center justify-center ${containerstyle} `} >
        <Text className="text-2xl text-[#fff] ">{title}</Text>
   </TouchableOpacity>
  )
}

export default But