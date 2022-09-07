import React from 'react'
import Box from './Base/Box'
import Typography from './Base/Typography'
import { textColor } from '~/constants'

interface IProps {
  fontSize?: number
  label: string
  color?: string
}

const TextWithLine: React.FC<IProps> = ({ fontSize = 16, label = '', color = textColor }) => {
  return (
    <Box flexDirection="row" alignItems="flex-end">
      <Typography fontSize={fontSize} color={color}>
        {label}
      </Typography>
      <Box flex={1} height={1} backgroundColor={color} marginLeft={4} marginBottom={4} />
    </Box>
  )
}

export default TextWithLine
