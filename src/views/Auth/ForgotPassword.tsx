import React from 'react'
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { ArrowRight, ChevronBigLeft, EmailIcon } from '~/assets/icons'
import { Box, CustomInput, Typography } from '~/components'
import { primaryBold, sizes } from '~/constants'
import { emailPattern } from '~/schemas'

interface Props {
  onForgotPassword: () => void
}

const ForgotPassword: React.FC<Props> = ({ onForgotPassword = () => {} }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object().shape({ email: emailPattern }),
    onSubmit: (values) => {
      console.log({ values })
      // Todo: Xử lý gửi dữ liệu lên server sau đó thao tác để gửi mail
    },
  })

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik

  const validateInputField = (name: keyof typeof errors) => {
    if (touched[name] && errors[name]) {
      return errors[name]
    }
    return ''
  }

  const renderBack = () => {
    return (
      <Pressable hitSlop={10} onPress={onForgotPassword}>
        <Box flexDirection="row" alignItems="center">
          <ChevronBigLeft color="#000" />
          <Typography marginLeft={4} fontSize={18} fontWeight="600" textDecorationLine="underline">
            Go back
          </Typography>
        </Box>
      </Pressable>
    )
  }

  const renderHeading = () => {
    return (
      <Typography
        fontSize={36}
        marginTop={30}
        color={primaryBold}
        fontWeight="600"
        width="50%"
        marginBottom={28}
      >
        Forgot password?
      </Typography>
    )
  }

  const renderInput = () => {
    return (
      <Box marginBottom={20}>
        <CustomInput
          label="Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          error={validateInputField('email')}
          placeholder="Enter your email"
          keyboardType="email-address"
          leftIcon={<EmailIcon />}
        />
      </Box>
    )
  }
  const renderHint = () => {
    return (
      <Typography fontSize={14} color="#676767">
        * We will send you a message to set or reset your new password
      </Typography>
    )
  }

  const renderTextSendCode = () => {
    return (
      <Typography color="#B2B2B2" fontSize={24} marginTop={20} fontWeight="700">
        Send code
      </Typography>
    )
  }

  const renderBtnSendCode = () => {
    return (
      <Box justifyContent="flex-end" flexDirection="row">
        <TouchableOpacity
          onPress={handleSubmit}
          activeOpacity={0.7}
          style={{
            padding: 20,
            backgroundColor: primaryBold,
            borderRadius: 1000,
            shadowColor: '#F8774A',
            shadowRadius: 1,
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.5,
          }}
        >
          <ArrowRight color="white" />
        </TouchableOpacity>
      </Box>
    )
  }

  return (
    <Box marginHorizontal={sizes.horizontal} marginTop={30}>
      {renderBack()}
      {renderHeading()}
      {renderInput()}
      {renderHint()}
      {renderTextSendCode()}
      {renderBtnSendCode()}
    </Box>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})
