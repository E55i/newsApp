import React from 'react'
import { AppBar, HStack, IconButton } from '@react-native-material/core'
import Icon from "@expo/vector-icons/MaterialIcons"

export default function SettingsAppBar({backgroundColor, title, navigation}) {
  return (
    <AppBar
    backgroundColor={backgroundColor}
    title={title}
    leading={props => (
        <HStack>
            <IconButton
                icon={<Icon name='arrow-back' color='white' size={24}/>}
                onPress={()=> {navigation.goBack()}}
                {...props}
            />
        </HStack>
    )}
    />
  )
}