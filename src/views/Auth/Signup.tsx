import React, { useState } from 'react'
import { ActivityIndicator, Pressable, ScrollView, StyleSheet } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useFormik } from 'formik'
import { useNavigation } from '@react-navigation/native'

import { Box, ButtonOpacity, CustomInput, Typography } from '~/components'
import { colorFacebook, primaryBold, sizes, STATUS } from '~/constants'
import {
  EmailIcon,
  EyeIcon,
  EyeIconSlash,
  FaceBookIcon,
  GoogleIcon,
  LockIcon,
  UserSolid,
} from '~/assets/icons'
import CardIcon from './components/CardIcon'
import { useAppDispatch } from '~/store/hooks'
import { signUpValidation } from '~/schemas'
import { signUp } from '~/services'
import { saveInfoUser } from '~/store/appUserSlice'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignUp = () => {
  const [togglePassword, setTogglePassword] = useState(true)
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
      passwordConfirmation: '',
      name: '',
      gender: false,
    },
    validationSchema: signUpValidation,
    onSubmit: async (values) => {
      setLoading(true)
      const data = await signUp(values)

      const { statusCode, message, content } = data

      if ([STATUS.SUCCESS_NUM, STATUS.OK].includes(statusCode as number)) {
        dispatch(saveInfoUser(content || {}))
        navigation.navigate('Authen', { screen: 'SignIn' })
      } else {
        setMessageError(message)
      }
      setLoading(false)
    },
  })

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    setFieldValue,
  } = formik

  const validateInputField = (name: keyof typeof errors) => {
    if (touched[name] && errors[name]) {
      return errors[name]
    }
    return ''
  }

  const renderHeader = () => {
    return (
      <Box marginTop={30} flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={36} color={primaryBold} fontWeight="600">
          Register
        </Typography>
        <Box flexDirection="row">
          <CardIcon>
            <GoogleIcon />
          </CardIcon>

          <CardIcon>
            <FaceBookIcon color={colorFacebook} />
          </CardIcon>
        </Box>
      </Box>
    )
  }

  const renderEmail = () => {
    return (
      <Box marginBottom={20}>
        <CustomInput
          isRequired
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

  const renderPassword = () => {
    return (
      <Box marginBottom={20}>
        <CustomInput
          isRequired
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
    )
  }

  const renderPasswordConfirmation = () => {
    return (
      <Box marginBottom={20}>
        <CustomInput
          isRequired
          label="Password Confirmation"
          onChangeText={handleChange('passwordConfirmation')}
          onBlur={handleBlur('passwordConfirmation')}
          value={values.passwordConfirmation}
          error={validateInputField('passwordConfirmation')}
          placeholder="Enter your password confirmation"
          secureTextEntry={togglePassword}
          leftIcon={<LockIcon />}
          rightIcon={
            <Pressable onPress={togglePasswordHandler}>
              {togglePassword ? <EyeIconSlash /> : <EyeIcon />}
            </Pressable>
          }
        />
      </Box>
    )
  }

  const renderName = () => {
    return (
      <Box marginBottom={20}>
        <CustomInput
          isRequired
          label="Name"
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          error={validateInputField('name')}
          placeholder="Enter your name"
          leftIcon={<UserSolid />}
        />
      </Box>
    )
  }

  const renderGender = () => {
    return (
      <Box marginBottom={20}>
        <Typography marginBottom={8} fontSize={16}>
          Gender <Typography color="red">*</Typography>
        </Typography>
        <BouncyCheckbox
          size={24}
          fillColor={primaryBold}
          text="Male"
          iconStyle={{ borderColor: primaryBold }}
          textStyle={{
            textDecorationLine: 'none',
            color: 'black',
            fontSize: 15,
          }}
          style={{ marginBottom: 8 }}
          onPress={() => {
            void setFieldValue('gender', true)
          }}
          disableBuiltInState
          isChecked={values.gender}
        />
        <BouncyCheckbox
          size={24}
          fillColor={primaryBold}
          text="Female"
          iconStyle={{ borderColor: primaryBold }}
          textStyle={{
            textDecorationLine: 'none',
            color: 'black',
            fontSize: 15,
          }}
          onPress={() => {
            void setFieldValue('gender', false)
          }}
          disableBuiltInState
          isChecked={!values.gender}
        />
      </Box>
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

  const renderBtnSubmit = () => {
    return (
      <Box marginTop={25}>
        <ButtonOpacity
          onPress={handleSubmit}
          leftIcon={loading && <ActivityIndicator size="small" />}
          title={loading ? 'Loading...' : 'Register'}
          disabled={!isValid || loading}
        />
      </Box>
    )
  }

  const renderForm = () => {
    return (
      <Box marginTop={20}>
        {renderEmail()}
        {renderPassword()}
        {renderPasswordConfirmation()}
        {renderName()}
        {renderGender()}
        {renderMessageError()}
        {renderBtnSubmit()}
      </Box>
    )
  }

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      extraHeight={350}
      nestedScrollEnabled
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      {renderHeader()}
      {renderForm()}
    </KeyboardAwareScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizes.horizontal,
    marginVertical: 30,
  },
})
