import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native'
import React from 'react'
import Box from '../Base/Box'
import Typography from '../Base/Typography'

interface CustomInputProps extends TextInputProps {
  label?: string
  value?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: string
  labelStyle?: TextStyle
  containerStyle?: ViewStyle
  onChangeText?: (text: string) => void
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  leftIcon,
  rightIcon,
  error,
  labelStyle,
  containerStyle,
  onChangeText,
  onBlur,
  ...passProps
}) => {
  return (
    <Box>
      {label && (
        <Typography marginBottom={8} fontSize={16} {...labelStyle}>
          {label}
        </Typography>
      )}
      <Box flexDirection="row" alignItems="center" style={[styles.containerInput, containerStyle]}>
        <Box marginRight={6}>{leftIcon}</Box>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          {...passProps}
        />
        <Box marginHorizontal={6}>{rightIcon}</Box>
      </Box>
      {error && (
        <Typography color="red" marginTop={4}>
          {error}
        </Typography>
      )}
    </Box>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  containerInput: {
    height: 58,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
  },
})
