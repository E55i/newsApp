import { View } from 'react-native'
import React from 'react'
import SettingsAppBar from '../components/SettingsAppBar'
import Username from '../components/Username'
import ThemeColor from '../components/ThemeColor'

export default function Settings({ ...props }) {
  return (
    <>
      <SettingsAppBar {...props} />
      <View>
        <Username {...props}/>
        <ThemeColor {...props}/>
      </View>
    </>
  )
}