import { ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import Box from '../Base/Box'
import { primaryColor } from '~/constants'

const LoadingOverlay = () => {
  return (
    <Box
      {...StyleSheet.absoluteFillObject}
      backgroundColor="rgba(0,0,0,0.2)"
      alignItems="center"
      justifyContent="center"
    >
      <Box backgroundColor="#fff" padding={10} borderRadius={10}>
        <ActivityIndicator color={primaryColor} size="large" />
      </Box>
    </Box>
  )
}

export default LoadingOverlay
