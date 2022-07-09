import 'react-native-gesture-handler'

import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import MainNavigator from '~/navigations/index'

const App = () => {
  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
