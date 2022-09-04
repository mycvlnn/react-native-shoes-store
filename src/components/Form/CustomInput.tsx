import {
  NativeSyntheticEvent,
  StyleProp,
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
  backgroundColor?: string
  radius?: number
  isRequired?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: string
  labelStyle?: TextStyle
  containerStyle?: ViewStyle
  onChangeText?: (text: string) => void
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  inputStyle?: StyleProp<TextStyle>
}

export const CustomInput = React.forwardRef<TextInput, CustomInputProps>(
  (
    {
      label,
      value,
      backgroundColor = '#fff',
      radius = 10,
      isRequired,
      leftIcon,
      rightIcon,
      error,
      labelStyle,
      containerStyle,
      inputStyle,
      onChangeText,
      onBlur,
      ...passProps
    },
    ref,
  ) => {
    return (
      <Box>
        {label && (
          <Typography marginBottom={8} fontSize={16} {...labelStyle}>
            {label} {isRequired && <Typography color="red">*</Typography>}
          </Typography>
        )}
        <Box
          flexDirection="row"
          alignItems="center"
          borderRadius={radius}
          style={[styles.containerInput, containerStyle]}
          backgroundColor={backgroundColor}
        >
          <Box marginRight={8}>{leftIcon}</Box>
          <TextInput
            ref={ref}
            style={[styles.input, inputStyle]}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            {...passProps}
          />
          <Box marginHorizontal={8}>{rightIcon}</Box>
        </Box>
        {error && (
          <Typography color="red" marginTop={4}>
            {error}
          </Typography>
        )}
      </Box>
    )
  },
)

const styles = StyleSheet.create({
  containerInput: {
    height: 58,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
  },
})
