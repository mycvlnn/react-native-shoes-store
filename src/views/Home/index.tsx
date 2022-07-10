import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View>
      <Text style={styles.text2}>Home Screen A</Text>
      <Text style={styles.text2}>Home Screen A</Text>
      <Text style={styles.text}>Home Screen A</Text>
      <Text style={styles.text}>Home Screen A</Text>
      <Text style={styles.text}>Home Screen A</Text>
      <Text style={styles.text}>Home Screen A</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-LightItalic',
    fontSize: 30,
  },
  text2: {
    fontSize: 30,
  },
})
