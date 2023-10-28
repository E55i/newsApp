import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Welcome({ ...props }) {
  return (
    <View style={styles.container}>
      {props.username !== '' &&
        <Text style={styles.welcome}>Welcome {props.username},</Text>}
      {props.username === '' &&
        <Text style={styles.welcome}>Welcome,</Text>}
      <Text style={styles.infoText}>It's a great news day!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 14,
  },
  welcome: {
    fontSize: 18, 
    marginBottom: 8, 
    color: '#9C9C9C',   
  },
  infoText: {
    fontSize: 20,
    color: '#333000',
  },
});