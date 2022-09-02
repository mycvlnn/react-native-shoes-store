import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Box, ButtonOpacity, Typography } from '~/components'
import { EmptyBoxIcon } from '~/assets/icons'
import { sizes } from '~/constants'

const EmptyFavorite = () => {
  const navigation = useNavigation()

  const exploreProduct = () => {
    navigation.navigate('BottomTab', { screen: 'Home' })
  }

  return (
    <Box marginTop="20%" flex={1} alignItems="center" margin={sizes.horizontal}>
      <Box alignItems="center">
        <EmptyBoxIcon color="#a7abbf" />
        <Typography
          color="#a7abbf"
          fontWeight="600"
          fontSize={24}
          textAlign="center"
          marginTop={sizes.horizontal}
        >
          Your favorites list is empty!
        </Typography>
        <Typography color="#a7abbf" fontSize={18} textAlign="center" marginTop={10}>
          Explore shoes and add them to favorite to show them here
        </Typography>
      </Box>
      <Box width="100%" marginTop="30%">
        <ButtonOpacity title="Explore shoes" onPress={exploreProduct} />
      </Box>
    </Box>
  )
}

export default EmptyFavorite
