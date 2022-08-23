import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RootStackRouteProps } from '~/navigations/types'
import { CloseGradientIcon, TickGradient } from '~/assets/icons'
import { Box, ButtonOpacity, Typography } from '~/components'
import { sizes } from '~/constants'

const Checkout = () => {
  const { params } = useRoute<RootStackRouteProps<'Checkout'>>()

  const navigation = useNavigation()

  const renderIconTick = () => {
    if (params.success) {
      return <TickGradient />
    }
    return <CloseGradientIcon />
  }

  const renderTitle = () => {
    const textTitle = params.success ? 'Order placed!' : 'Order failure!'

    return (
      <Typography fontSize={36} fontWeight="600" marginTop={20}>
        {textTitle}
      </Typography>
    )
  }

  const renderDescription = () => {
    const textDesc = params.success
      ? 'Your order is successfully placed'
      : "Your order couldn't go through. Please try again"

    return (
      <Typography textAlign="center" fontSize={24} fontWeight="600" marginTop={8}>
        {textDesc}
      </Typography>
    )
  }

  const goBackHome = () => {
    navigation.navigate('BottomTab', { screen: 'Home' })
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {renderIconTick()}
      {renderTitle()}
      {renderDescription()}

      <Box position="absolute" bottom="5%" width="100%" paddingHorizontal={sizes.horizontal}>
        <ButtonOpacity
          backgroundColor="#000"
          textColor="white"
          title="Back to home"
          onPress={goBackHome}
        />
      </Box>
    </Box>
  )
}

export default Checkout
