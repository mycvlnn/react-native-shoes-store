import React from 'react'
import { ActivityIndicator } from 'react-native'
import { primaryBold } from '~/constants'

import Box from '../Base/Box'

const LoadingComponent = () => {
  return (
    <Box flex={1} justifyContent="center">
      <ActivityIndicator color={primaryBold} size="large" />
    </Box>
  )
}

export default LoadingComponent
