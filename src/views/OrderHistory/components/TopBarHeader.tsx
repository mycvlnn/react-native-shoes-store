import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TopBarOrderHistory } from '~/navigations/types'

import { textColor } from '~/constants'
import Ongoing from '../views/Ongoing'
import History from '../views/History'

const Tab = createMaterialTopTabNavigator<TopBarOrderHistory>()

const TopBarAuthen = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{}}
      style={{
        backgroundColor: '#f2f2f2',
      }}
      screenOptions={{
        tabBarActiveTintColor: textColor,
        tabBarInactiveTintColor: 'rgba(16, 24, 32, 0.4)',
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontSize: 16,
          fontWeight: '600',
        },
        tabBarIndicatorStyle: {
          height: 1,
          backgroundColor: textColor,
          borderRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="Ongoing"
        component={Ongoing}
        options={{
          tabBarLabel: 'On going',
        }}
      />
      <Tab.Screen name="History" component={History} options={{ tabBarLabel: 'History' }} />
    </Tab.Navigator>
  )
}

export default React.memo(TopBarAuthen)
