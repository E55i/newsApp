import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, {useState} from 'react'
import Icon from '@expo/vector-icons/MaterialIcons'


export default function Search({ ...props }) {

  const [inputText, setInputText] = useState('')

  const handleButtonClick = () => {
    props.setKeyword(inputText)
  }

  return (
    <View style={styles.search}>
      <TextInput
        style={styles.input}
        placeholder='What are you looking for?'
        value={inputText}        
        onChangeText={text => setInputText(text)}
        returnKeyType='done'
        //Api keyword limit is 500 characters
        maxLength={500}
      />
      <TouchableOpacity 
      style={[styles.button, { backgroundColor: props.effectColor }]}
      onPress={handleButtonClick}
      >
        <Text style={styles.text}>Search</Text>
        <Icon
          name="search"
          size={28}
          color="#FFFFFF"
          
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#FCEADE',
    padding: 8,
    margin: 8,
    borderWidth: 1,
    width: '65%',
    borderRadius: 20,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4,
  },
  button: {
    flexDirection: 'row',
    padding: 4,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    margin: 4,
  },
  text: {
    margin: 2,
    color: "#FFFFFF",
  },
  
})