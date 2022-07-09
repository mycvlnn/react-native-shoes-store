import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTabNavigator from './BottomTabNavigator'
import { RootStackParamList } from './types'
import EditProfile from '~/views/Setting/views/EditProfile'
import ProductDetail from '~/views/ProductDetail'
import YourCart from '~/views/YourCart'
import NotFound from '~/views/NotFound'
import Language from '~/views/Language'
import Location from '~/views/Setting/views/Location'

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="YourCart" component={YourCart} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="NotFound" component={NotFound} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  )
}

export default React.memo(StackNavigator)
