import React, { useState } from 'react'
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
import Authen from '~views/Auth'
import { appUserSelector } from '~/store/appUserSlice/selector'
import Checkout from '~/views/Checkout'
import Notifications from '~/views/Notifications'
import Address from '~/views/Address'
import TermAndCondition from '~/views/TermAndCondition'
import OrderHistory from '~/views/OrderHistory'
import TermScreen from '~/views/TermAndCondition/views/TermScreen'
import PrivacySceen from '~/views/TermAndCondition/views/PrivacySceen'
import AddressForm from '~/views/Address/views/AddressForm'
import PickLocation from '~/views/Address/views/PickLocation'
import Splash from '~/views/Splash'
import Onboarding from '~/views/onboarding'
import StoreDetails from '~/views/StoreList/views/StoreDetails'

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNavigator = () => {
  const { isLogin, isFirstLauch } = useSelector(appUserSelector)
  const [showSplash, setShowSplash] = useState(true)

  if (showSplash) {
    return <Splash onFinishSplash={() => setShowSplash(false)} />
  }

  return (
    <Stack.Navigator>
      {isFirstLauch && (
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      )}
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
          <Stack.Screen
            name="StoreDetails"
            component={StoreDetails}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen name="NotFound" component={NotFound} />
          <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />

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
          <Stack.Screen
            name="OrderHistory"
            component={OrderHistory}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Address" component={Address} options={{ headerShown: false }} />
          <Stack.Screen
            name="AddressForm"
            component={AddressForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PickLocation"
            component={PickLocation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TermAndCondition"
            component={TermAndCondition}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Term" component={TermScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Privacy" component={PrivacySceen} options={{ headerShown: false }} />
        </>
      ) : (
        <Stack.Screen name="Authen" component={Authen} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  )
}

export default React.memo(StackNavigator)
