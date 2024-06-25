import { View, Text, TextInput, TouchableOpacity,Image} from 'react-native'
import icons from "../constants/icons"
import { useState } from 'react'

const FormComponent = ({title, handle , value, otherstyle}) => {

    const [showpass, setshowpass]=useState(false)
  return (
    <View className={`${otherstyle} h-[120] w-[350]  m-2 `}>
      <Text className="text-[24px] font-extrabold text-[#000000] p-4 ml-[10] pb-[0]">{title} </Text>
      <View className="h-[70] w-full bg-black-200 rounded-full border-[3px] border-[#C1FF72] flex-row">
        <TextInput
            className="flex-1 text-[#ffffff] text-[20px] m-2 mr-0 ml-[12]   font-extrabold "
            value={value}
            onChangeText={handle}
            secureTextEntry={title==='Password' && showpass}
        />

        {title==="Password" && (
            <TouchableOpacity className="justify-center" activeOpacity={0.9} onPress={()=>setshowpass(!showpass)}>
                <Image resizeMode='contain' className="h-[40]" source={!showpass ?icons.eye: icons.eyeHide}/> 
                
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormComponent