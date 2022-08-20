import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'

import BottomTabNavigator from './BottomTabNavigator'
import { RootStackParamList } from './types'
import EditProfile from '~/views/Setting/views/EditProfile'
import ProductDetail from '~/views/ProductDetail'
import YourCart from '~/views/YourCart'
import NotFound from '~/views/NotFound'
import Language from '~/views/Language'
import Location from '~/views/Setting/views/Location'
import { Loading } from '~/components'
import Authen from '~views/Auth'
import { appUserSelector } from '~/store/appUserSlice/selector'

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNavigator = () => {
  const [loading, setLoading] = useState(true)
  const { isLogin } = useSelector(appUserSelector)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) return <Loading />

  return (
    <Stack.Navigator initialRouteName={isLogin ? 'BottomTab' : 'Authen'}>
      {isLogin ? (
        <>
          <Stack.Screen
            name="BottomTab"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="NotFound" component={NotFound} />
          <Stack.Screen name="Language" component={Language} />

          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="YourCart" component={YourCart} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </>
      ) : (
        <Stack.Screen name="Authen" component={Authen} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  )
}

export default React.memo(StackNavigator)
