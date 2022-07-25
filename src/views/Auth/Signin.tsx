import React, { useState } from 'react'
import { ActivityIndicator, Pressable, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useFormik } from 'formik'
import { useNavigation } from '@react-navigation/native'

import {
  EmailIcon,
  EyeIcon,
  EyeIconSlash,
  FaceBookIcon,
  GoogleIcon,
  LockIcon,
} from '~/assets/icons'
import { Box, ButtonOpacity, CustomInput, Typography } from '~/components'
import { colorFacebook, primaryColor, sizes, STATUS } from '~/constants'
import { authenValidation } from '~/schemas'
import { signIn } from '~/services'

import { useAppDispatch } from '~/store/hooks'
import { saveInfoUser } from '~/store/appUserSlice'
import ForgotPassword from './ForgotPassword'

const SignIn = () => {
  const [togglePassword, setTogglePassword] = useState(true)
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [messageError, setMessageError] = useState<string | undefined>('')
  const navigation = useNavigation()
  const dispatch = useAppDispatch()

  const togglePasswordHandler = () => {
    setTogglePassword(!togglePassword)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: authenValidation,
    onSubmit: (values) => {
      void handleLogin(values)
    },
  })

  const { handleBlur, handleChange, handleSubmit, values, errors, touched, isValid } = formik

  const goToHomeScreen = () => {
    navigation.navigate('BottomTab', { screen: 'Home' })
  }

  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true)
    const data = await signIn(values)
    const { statusCode, message, content } = data

    if (statusCode === STATUS.SUCCESS_NUM) {
      dispatch(
        saveInfoUser({
          accessToken: content?.accessToken,
          email: content?.email,
          isLogin: true,
        }),
      )

      goToHomeScreen()
    } else {
      setMessageError(message)
    }
    setLoading(false)
  }

  const validateInputField = (name: keyof typeof errors) => {
    if (touched[name] && errors[name]) {
      return errors[name]
    }
    return ''
  }

  const renderFormInput = () => {
    return (
      <>
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
        <Box>
          <CustomInput
            label="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={validateInputField('password')}
            placeholder="Enter your password"
            secureTextEntry={togglePassword}
            leftIcon={<LockIcon />}
            rightIcon={
              <Pressable onPress={togglePasswordHandler}>
                {togglePassword ? <EyeIconSlash /> : <EyeIcon />}
              </Pressable>
            }
          />
        </Box>
      </>
    )
  }

  const renderOptionControl = () => {
    return (
      <Box flexDirection="row" justifyContent="space-between">
        <Pressable onPress={forgotPassword}>
          <Typography color={primaryColor} marginTop={18} fontWeight="700">
            Forgot password ?
          </Typography>
        </Pressable>
        <Pressable onPress={goToHomeScreen}>
          <Typography color="black" textDecorationLine="underline" marginTop={18} fontWeight="700">
            Continue as guest
          </Typography>
        </Pressable>
      </Box>
    )
  }

  const renderButtonSubmit = () => {
    return (
      <Box marginTop={25}>
        <ButtonOpacity
          onPress={handleSubmit}
          leftIcon={loading && <ActivityIndicator size="small" />}
          title={loading ? 'Loading...' : 'Login'}
          disabled={!isValid || loading}
        />
      </Box>
    )
  }

  const renderOptionalLogin = () => {
    return (
      <>
        <Box marginTop={25}>
          <ButtonOpacity
            onPress={() => {}}
            title="Login with Facebook"
            leftIcon={
              <Box marginRight={10}>
                <FaceBookIcon />
              </Box>
            }
            backgroundColor={colorFacebook}
          />
        </Box>
        <Box marginTop={25}>
          <ButtonOpacity
            onPress={() => {}}
            title="Login with Google"
            leftIcon={
              <Box marginRight={10}>
                <GoogleIcon />
              </Box>
            }
            backgroundColor="white"
            textColor="black"
          />
        </Box>
      </>
    )
  }

  const renderMessageError = () => {
    if (!messageError) return null

    return (
      <Typography color="red" marginTop={8}>
        {messageError}
      </Typography>
    )
  }

  const forgotPassword = () => {
    setIsForgotPassword(!isForgotPassword)
  }

  const renderForgotPassword = () => {
    return <ForgotPassword onForgotPassword={forgotPassword} />
  }

  if (isForgotPassword) return renderForgotPassword()

  return (
    <ScrollView style={styles.container}>
      {renderFormInput()}
      {renderMessageError()}
      {renderOptionControl()}
      {renderButtonSubmit()}
      <Typography textAlign="center" fontSize={18} fontWeight="700" marginTop={16}>
        Or
      </Typography>
      {renderOptionalLogin()}
    </ScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: sizes.horizontal,
    marginVertical: 48,
  },
})
