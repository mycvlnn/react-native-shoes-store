import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

import { logoShoes } from '~/assets/img'
import { Box } from '~/components'
import TopBarAuthen from './TopBarAuthen'

const Authen = () => {
  return (
    <Box flex={1} backgroundColor="white" paddingTop={30}>
      <Box alignItems="center">
        <ImageBackground source={logoShoes} resizeMode="contain" style={styles.image} />
      </Box>
      <TopBarAuthen />
    </Box>
  )
}

export default Authen

const styles = StyleSheet.create({
  image: {
    width: 200,
    aspectRatio: 1,
    justifyContent: 'center',
  },
})
