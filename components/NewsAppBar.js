import React from 'react'
import { AppBar, HStack, IconButton } from '@react-native-material/core'
import Icon from "@expo/vector-icons/MaterialIcons"

export default function NewsAppBar({backgroundColor, title, navigation}) {
  return (
   <AppBar
   backgroundColor={backgroundColor}
   title={title}
   trailing={props=>(
    <HStack>
      <IconButton
      icon={<Icon name='settings' color='white' size={24}/>}
      onPress={()=>{navigation.navigate('Settings')}}
      {...props}
      />
    </HStack>
   )}
   />
  )
}