import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import NewsAppBar from '../components/NewsAppBar'
import News from '../components/News'
import Welcome from '../components/Welcome'
import Categories from '../components/Categories'
import Search from '../components/Search'

export default function Home({...props}) {

  const [keyword, setKeyword] = useState('bitcoin')

  return (
    <>
    <NewsAppBar {...props}/>
    <View style={styles.home}>
      <Welcome {...props}/>
      <Search
      setKeyword={setKeyword}
      {...props}
      />
      <Categories
      setKeyword={setKeyword}
      />
      <News
      keyword={keyword}
      />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});