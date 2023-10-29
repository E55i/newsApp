import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import Home from './screens/Home';
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './screens/Settings';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showAlert } from './helpers/Functions';


export default function App() {

  const [username, setUsername] = useState('')
  const [themeColors, setThemeColors] = useState(['#FF8A22', '#25CED1'])

  const Stack = createNativeStackNavigator()

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedUsername = await AsyncStorage.getItem('username')
        const savedThemeColors = await AsyncStorage.getItem('themeColors')

        if (savedUsername) {
          setUsername(savedUsername)
        }

        if (savedThemeColors) {
          setThemeColors(JSON.parse(savedThemeColors))
        }
      } catch (error) {
        showAlert("Error", "Error loading username and theme colors from phone memory")
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem('username', username)
        await AsyncStorage.setItem('themeColors', JSON.stringify(themeColors))
      } catch (error) {
        showAlert("Error", "Error when saving username and theme colors from phone memory")
      }
    }

    saveData()
  }, [username, themeColors])

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='news' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {(props) =>
              <Home
                {...props}
                backgroundColor={themeColors[0]}
                effectColor={themeColors[1]}
                title='News'
                username={username}
              />
            }
          </Stack.Screen>
          <Stack.Screen name="Settings">
            {(props) =>
              <Settings
                backgroundColor={themeColors[0]}
                effectColor={themeColors[1]}
                title='Settings'
                username={username}
                setUsername={setUsername}
                setThemeColors={setThemeColors}
                {...props}
              />
            }
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    flex: 1,
  },
})
