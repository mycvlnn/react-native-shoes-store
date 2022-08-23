import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Box, ButtonOpacity, Typography } from '~/components'

const CartEmpty = () => {
  const navigation = useNavigation()
  const goToHome = () => {
    navigation.navigate('BottomTab', { screen: 'Home' })
  }

  return (
    <Box flex={1} width="70%" marginTop="10%">
      <Typography fontSize={44} fontWeight="800" color="rgba(16, 24, 32, 0.4)">
        Your cart is empty... Click here to see the menu
      </Typography>
      <Box marginTop={20} width="60%">
        <ButtonOpacity
          title="See menu"
          onPress={goToHome}
          backgroundColor="#000"
          textColor="white"
        />
      </Box>
    </Box>
  )
}

export default CartEmpty
