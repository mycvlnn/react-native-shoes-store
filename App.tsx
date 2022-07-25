import 'react-native-gesture-handler'

import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import MainNavigator from '~/navigations/index'
import { persistor, store } from '~/store'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider style={styles.container}>
          <MainNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
