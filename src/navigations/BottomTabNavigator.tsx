import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BottomTabParamList } from './types'
import Home from '~/views/Home'
import Favorites from '~/views/Favorites'
import Search from '~/views/Search'
import Setting from '~/views/Setting'
import { FavoriteOutline, HomeOutlineIcon, MenuBarIcon, SearchIcon } from '~/assets/icons'
import { tabBarActiveTintColor } from '~/constants'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: tabBarActiveTintColor }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <HomeOutlineIcon color={color} />,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{ tabBarIcon: ({ color }) => <SearchIcon color={color} /> }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={Favorites}
        options={{ tabBarIcon: ({ color }) => <FavoriteOutline color={color} /> }}
      />
      <BottomTab.Screen
        name="Setting"
        component={Setting}
        options={{ tabBarIcon: ({ color }) => <MenuBarIcon color={color} /> }}
      />
    </BottomTab.Navigator>
  )
}

export default React.memo(BottomTabNavigator)
