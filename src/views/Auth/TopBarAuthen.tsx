import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { AuthenTabParamList } from '~/navigations/types'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { primaryBold } from '~/constants'

const Tab = createMaterialTopTabNavigator<AuthenTabParamList>()

const TopBarAuthen = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{}}
      style={{
        backgroundColor: '#f2f2f2',
      }}
      screenOptions={{
        tabBarStyle: {
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowRadius: 4,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        },
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          color: 'black',
          fontSize: 16,
          fontWeight: '600',
        },
        tabBarIndicatorStyle: {
          height: 3,
          backgroundColor: primaryBold,
          borderRadius: 10,
        },
        tabBarIndicatorContainerStyle: {
          marginHorizontal: 40,
          paddingHorizontal: 80,
        },
      }}
    >
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarLabel: 'Sign in',
        }}
      />
      <Tab.Screen name="SignUp" component={SignUp} options={{ tabBarLabel: 'Sign up' }} />
    </Tab.Navigator>
  )
}

export default React.memo(TopBarAuthen)
