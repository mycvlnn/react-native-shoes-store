import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import StackNavigator from './StackNavigator'
import { navigationRef } from './navigationHelper'

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default React.memo(MainNavigator)
