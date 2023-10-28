import { Platform, SafeAreaView, StyleSheet} from 'react-native';
import Home from './screens/Home';
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './screens/Settings';
import React, { useState } from 'react';


export default function App() {

  const [username, setUsername] = useState('Essi')
  const [themeColors, setThemeColors] = useState(['#FF8A22', '#25CED1'])

  const Stack = createNativeStackNavigator()

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

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    flex: 1,
  },
});
