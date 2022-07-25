import React from 'react'
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { disabledColor, primaryColor } from '~/constants'
import Box from '../Base/Box'
import Typography from '../Base/Typography'

interface IProps {
  onPress: () => void
  title?: string
  size?: 'sm' | 'normal' | 'large'
  backgroundColor?: string
  textColor?: string
  customStyleButton?: ViewStyle
  fontSize?: number
  fontWeight?: TextStyle['fontWeight']
  leftIcon?: React.ReactNode
  disabled?: boolean
}

const ButtonOpacity: React.FC<IProps> = ({
  onPress,
  title = '',
  backgroundColor = primaryColor,
  textColor = 'white',
  size = 'normal',
  customStyleButton,
  fontSize = 18,
  fontWeight = '700',
  leftIcon,
  disabled,
}) => {
  let style: ViewStyle = {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 30,
  }

  if (size === 'sm') {
    style = {
      paddingVertical: 12,
      paddingHorizontal: 8,
      borderRadius: 20,
    }
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        {
          backgroundColor: disabled ? disabledColor : backgroundColor,
          ...style,
        },
        customStyleButton,
      ]}
    >
      <Box flexDirection="row" justifyContent="center">
        {leftIcon}
        <Typography
          textAlign="center"
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={textColor}
        >
          {title}
        </Typography>
      </Box>
    </TouchableOpacity>
  )
}

export default React.memo(ButtonOpacity)
