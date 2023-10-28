import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Categories({...props}) {

  const handleButtonClick = (item) => {
    props.setKeyword(item);
    console.log("keyword: "+item) 
  }

  const data = ["Finance", "Apple", "Microsoft", "Politics", "Health", "Style", "Europe"]

  return (
    <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) =>
        <TouchableOpacity
          style={styles.topics}
          onPress={()=>handleButtonClick(item)}
        >
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      }
    />
  )
}

const styles = StyleSheet.create({
  topics: {
    width: 100,
    height: 100,
    alignItems: 'center',
    paddingTop: 10,
  },
  text: {
    borderRadius: 20,
    borderColor: '#FCEADE',
    borderWidth: 2,
    padding: 8,
    textAlign: 'center',
  }
});