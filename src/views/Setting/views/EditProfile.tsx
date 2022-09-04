import { Image, Pressable, ScrollView, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Box, CustomInput, ErrorServer, Header, Loading, Typography } from '~/components'
import { defaultColors, fallbackImage, primaryBold, primaryColor, sizes, STATUS } from '~/constants'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { updateProfileSchema } from '~/schemas'
import { EmailIcon, EyeIcon, EyeIconSlash, LockIcon, UserSolid } from '~/assets/icons'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { changePassword, getInfoUser, updateInfoUser } from '~/services'
import Unauthorized from '~/components/Popup/Unauthorized'

const EditProfile = () => {
  const navigation = useNavigation()
  const [togglePassword, setTogglePassword] = useState(true)
  const [isFetchError, setIsFetchError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)
  const [messageError, setMessageError] = useState<string>('')
  const [messageErrorPassword, setMessageErrorPassword] = useState<string>('')

  const isMounted = useIsFocused()

  const togglePasswordHandler = () => {
    setTogglePassword(!togglePassword)
  }

  const formik = useFormik({
    initialValues: {
      avatar: fallbackImage,
      email: '',
      password: '',
      passwordConfirmation: '',
      name: '',
      gender: false,
    },
    validationSchema: updateProfileSchema,
    onSubmit: async ({ email, password, name, gender }) => {
      setLoading(true)
      if (password) {
        const { statusCode, content } = await changePassword(password)

        if (statusCode !== STATUS.SUCCESS_NUM) {
          setMessageErrorPassword(content || '')
        }
      }

      const { statusCode, content } = await updateInfoUser({ email, name, gender })
      if (statusCode === STATUS.SUCCESS_NUM) {
        navigation.goBack()
      } else if (statusCode === STATUS.UNAUTHORIZED) {
        setVisibleModal(true)
      } else {
        setMessageError(content || '')
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
    setValues,
  } = formik

  const validateInputField = (name: keyof typeof errors) => {
    if (touched[name] && errors[name]) {
      return errors[name]
    }
    return ''
  }

  const goBack = () => {
    navigation.goBack()
  }

  const handleChoosePicture = () => {
    // TODO:
  }

  const renderBtnChoosePicture = () => {
    return (
      <Box marginTop={18}>
        <Pressable onPress={handleChoosePicture}>
          <Typography color={primaryColor} fontSize={20} fontWeight="600">
            Add a profile pic
          </Typography>
        </Pressable>
      </Box>
    )
  }

  const renderAvatar = () => {
    return (
      <Box alignSelf="center">
        <Image
          source={{ uri: values.avatar }}
          style={{ width: 150, height: 150, borderRadius: 1000 }}
        />
        {renderBtnChoosePicture()}
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
          containerStyle={{ borderColor: '#000', borderWidth: 1 }}
          placeholderTextColor="#888"
        />
      </Box>
    )
  }

  const renderEmail = () => {
    return (
      <Box marginBottom={20}>
        <CustomInput
          editable={false}
          isRequired
          label="Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          error={validateInputField('email')}
          placeholder="Enter your email"
          keyboardType="email-address"
          leftIcon={<EmailIcon />}
          containerStyle={{ borderColor: '#000', borderWidth: 1 }}
          placeholderTextColor="#888"
        />
      </Box>
    )
  }

  const renderPassword = () => {
    return (
      <Box marginBottom={20}>
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
          containerStyle={{ borderColor: '#000', borderWidth: 1 }}
          placeholderTextColor="#888"
        />
      </Box>
    )
  }

  const renderPasswordConfirmation = () => {
    return (
      <Box marginBottom={20}>
        <CustomInput
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
          containerStyle={{ borderColor: '#000', borderWidth: 1 }}
          placeholderTextColor="#888"
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
        {messageError} {messageErrorPassword}
      </Typography>
    )
  }

  const renderBtnSubmit = () => {
    if (!isValid) return <Box />

    return (
      <Pressable onPress={handleSubmit}>
        <Typography color={primaryColor} fontSize={18} fontWeight="600">
          Done
        </Typography>
      </Pressable>
    )
  }

  const getInfoUserApi = useCallback(async () => {
    setLoading(true)
    setIsFetchError(false)
    try {
      const { statusCode, content } = await getInfoUser()
      if (statusCode === STATUS.SUCCESS_NUM) {
        void setValues({
          avatar: content?.avatar || '',
          email: content?.email || '',
          gender: content?.gender || false,
          name: content?.name || '',
          password: '',
          passwordConfirmation: '',
        })
      }
      if (statusCode === STATUS.UNAUTHORIZED) {
        setIsFetchError(true)
        setVisibleModal(true)
      }
    } catch (error) {
      setIsFetchError(true)
    }
    setLoading(false)
  }, [setValues])

  useEffect(() => {
    if (isMounted) {
      void getInfoUserApi()
    }
  }, [isMounted, getInfoUserApi])

  if (loading) return <Loading />

  const renderContent = () => {
    if (isFetchError) return <ErrorServer onRetry={() => void getInfoUserApi()} />

    return (
      <>
        {renderAvatar()}
        <Box marginHorizontal={sizes.horizontal} marginTop={20}>
          <ScrollView contentContainerStyle={{ paddingBottom: '10%' }}>
            {renderName()}
            {renderEmail()}
            {renderPassword()}
            {renderPasswordConfirmation()}
            {renderGender()}
            {renderMessageError()}
          </ScrollView>
        </Box>
      </>
    )
  }

  const renderPopupUnauthorized = () => {
    if (!visibleModal) return null

    return <Unauthorized isVisible={visibleModal} onCloseModal={() => setVisibleModal(false)} />
  }

  return (
    <Box backgroundColor="white" flex={1}>
      <Header
        color={defaultColors.black}
        goBack={goBack}
        title="Profile"
        backgroundColor="#fff"
        customRight={renderBtnSubmit}
      />
      {renderContent()}
      {renderPopupUnauthorized()}
    </Box>
  )
}

export default EditProfile
