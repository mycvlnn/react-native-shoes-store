import { ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import Box from '../Base/Box'
import { primaryColor } from '~/constants'

interface Props {
  backgroundColor?: string
  spinnerColor?: string
  size?: number | 'small' | 'large' | undefined
}

const Loading: React.FC<Props> = ({
  backgroundColor = '#fff',
  spinnerColor = primaryColor,
  size = 'large',
}) => {
  return (
    <Box
      {...StyleSheet.absoluteFillObject}
      backgroundColor={backgroundColor}
      alignItems="center"
      justifyContent="center"
    >
      <ActivityIndicator color={spinnerColor} size={size} />
    </Box>
  )
}

export default Loading
