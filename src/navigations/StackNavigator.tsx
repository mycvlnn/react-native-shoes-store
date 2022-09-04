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
import Checkout from '~/views/Checkout'
import Notifications from '~/views/Notifications'
import Address from '~/views/Address'
import TermAndCondition from '~/views/TermAndCondition'

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
          <Stack.Screen name="YourCart" component={YourCart} options={{ headerShown: false }} />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{ headerShown: false, presentation: 'modal' }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Address" component={Address} />
          <Stack.Screen name="TermAndCondition" component={TermAndCondition} />
        </>
      ) : (
        <Stack.Screen name="Authen" component={Authen} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  )
}

export default React.memo(StackNavigator)
