import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BottomTabParamList } from './types'
import Home from '~/views/Home'
import Favorites from '~/views/Favorites'
import Search from '~/views/Search'
import Setting from '~/views/Setting'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Favorite" component={Favorites} />
      <BottomTab.Screen name="Setting" component={Setting} />
    </BottomTab.Navigator>
  )
}

export default React.memo(BottomTabNavigator)
