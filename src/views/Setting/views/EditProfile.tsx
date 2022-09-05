import { Image, Keyboard, Platform, Pressable, ScrollView, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, CustomInput, ErrorServer, Header, Loading, Typography } from '~/components'
import {
  defaultColors,
  fallbackImage,
  permissionType,
  primaryBold,
  primaryColor,
  sizes,
  STATUS,
} from '~/constants'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { updateProfileSchema } from '~/schemas'
import { EmailIcon, EyeIcon, EyeIconSlash, LockIcon, UserSolid } from '~/assets/icons'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { changePassword, getInfoUser, updateInfoUser } from '~/services'
import Unauthorized from '~/components/Popup/Unauthorized'
import PopupImagePicker from '~/components/Popup/PopupImagePicker'
import PopupOpenSettingDevice from '~/components/Popup/PopupOpenSettingDevice'
import {
  checkAndRequestCameraPermission,
  checkAndRequestLibraryPermission,
  validateFileSize,
} from '~/utils'
import { RESULTS, openSettings } from 'react-native-permissions'
import type { CameraOptions, ImageLibraryOptions } from 'react-native-image-picker'
import * as ImagePicker from 'react-native-image-picker'
import { FileImage } from '~/models'

const EditProfile = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const [togglePassword, setTogglePassword] = useState(true)
  const [isFetchError, setIsFetchError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)
  const [showPopupMedia, setShowPopupMedia] = useState(false)
  const [showPopupSetting, setShowPopupSetting] = useState(false)
  const [messageError, setMessageError] = useState<string>('')
  const [messageErrorPassword, setMessageErrorPassword] = useState<string>('')
  const [typePermission, setTypePermission] = useState('')
  const [fileImage, setFileImage] = useState<FileImage>()
  const [errorImage, setErrorImage] = useState(false)

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
    Keyboard.dismiss()
    setShowPopupMedia(true)
  }

  const renderBtnChoosePicture = () => {
    return (
      <Box marginTop={10}>
        <Pressable onPress={handleChoosePicture}>
          <Typography color={primaryColor} fontSize={18} fontWeight="600">
            Update profile picture
          </Typography>
        </Pressable>
      </Box>
    )
  }

  const renderMessageErrorAvatar = () => {
    if (!errorImage) return null

    return (
      <Typography color="red" textAlign="center" marginTop={4}>
        {t('media.errorImage')}
      </Typography>
    )
  }

  const renderAvatar = () => {
    const uri = fileImage ? fileImage.uri : values.avatar

    return (
      <Box alignItems="center">
        <Image source={{ uri }} style={{ width: 150, height: 150, borderRadius: 1000 }} />
        {renderMessageErrorAvatar()}
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
        <Box marginHorizontal={sizes.horizontal} marginTop={20} flex={1}>
          <ScrollView scrollEnabled contentContainerStyle={{ paddingBottom: '10%' }}>
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

  const optionLibrary: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 0.8,
  }

  // hàm xử lý response khi chọn camera hoặc chọn ảnh
  const handleResponseMedia = (response: ImagePicker.ImagePickerResponse) => {
    setShowPopupMedia(false)
    if (response && !response.didCancel && !response.errorCode && response.assets) {
      const mediaResponse = response.assets[0]
      if (validateFileSize(mediaResponse.fileSize)) {
        setErrorImage(false)
        setFileImage({
          name: mediaResponse.fileName,
          uri:
            Platform.OS === 'android'
              ? mediaResponse.uri
              : mediaResponse.uri?.replace('file://', ''), // trên android thì không cần file://
          type: mediaResponse.type,
        })
      } else {
        setErrorImage(true)
      }
    }
  }

  /** func mở popup xác nhận mở setting phone để cấp quyền */
  const showPopupConfirmOpenSetting = (type?: string) => {
    setTypePermission(type || '')
    setShowPopupSetting(true)
  }

  const handleOpenCamera = async () => {
    Keyboard.dismiss()
    const checkPermissionCamera = await checkAndRequestCameraPermission()
    if (checkPermissionCamera === RESULTS.BLOCKED) {
      showPopupConfirmOpenSetting(permissionType.camera)
    } else {
      const response = await ImagePicker.launchCamera(optionLibrary)
      handleResponseMedia(response)
    }
  }

  const handleOpenGallery = async () => {
    Keyboard.dismiss()
    // Xử lý check quền sau đó chọn ảnh mong muốn
    const checkPermissionLibrary = await checkAndRequestLibraryPermission()
    // Truờng hợp không có quền quền => mở popup cấp quền quền
    if (checkPermissionLibrary === RESULTS.BLOCKED) {
      showPopupConfirmOpenSetting(permissionType.library)
    } else {
      // Trong trường hợp có quền => lưu lại state ảnh phục vụ cho việc render ra ui và  gửi lên server
      const response = await ImagePicker.launchImageLibrary(optionLibrary)
      handleResponseMedia(response)
    }
  }

  const renderPopupOptionsMedia = () => {
    return (
      <PopupImagePicker
        isVisible={showPopupMedia}
        onCloseModal={() => setShowPopupMedia(false)}
        onPressCamera={() => void handleOpenCamera()}
        onPressGallery={() => void handleOpenGallery()}
      />
    )
  }

  const handleOpenSettingDevice = () => {
    setShowPopupSetting(false)
    setTypePermission('')
    void openSettings()
  }

  const handleCancelOpenSetting = () => {
    setShowPopupSetting(false)
    setTypePermission('')
  }

  // hiển thị cho phép truy cập setting để cấp quền hay không
  const renderPopupPermission = () => {
    return (
      <PopupOpenSettingDevice
        isVisible={showPopupSetting}
        onCancel={handleCancelOpenSetting}
        onClosePopup={() => setShowPopupSetting(false)}
        onOpenSetting={handleOpenSettingDevice}
        title={typePermission && t(`media.${typePermission}`)}
      />
    )
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
      {renderPopupOptionsMedia()}
      {renderPopupPermission()}
    </Box>
  )
}

export default EditProfile
