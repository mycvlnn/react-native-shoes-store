import { StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box, Header } from '~/components'
import { defaultColors, sizes } from '~/constants'

import TermItem from './components/TermItem'
import { routes } from '~/routes'

const rules = [
  { id: 1, name: 'Terms & Conditions', path: routes.Term },
  {
    id: 2,
    name: 'Privacy Policty',
    path: routes.Privacy,
  },
]

const TermAndCondition = () => {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  const renderHeader = () => {
    return (
      <Header
        color={defaultColors.black}
        goBack={goBack}
        title="Terms & Conditions"
        backgroundColor="#fff"
      />
    )
  }

  const renderConent = () => {
    return (
      <Box paddingHorizontal={sizes.horizontal}>
        {rules.map((item) => (
          <TermItem
            key={item.id}
            title={item.name}
            onPress={() => navigation.navigate(item.path)}
          />
        ))}
      </Box>
    )
  }

  return (
    <Box flex={1} backgroundColor="#fff">
      {renderHeader()}
      {renderConent()}
    </Box>
  )
}

export default TermAndCondition
