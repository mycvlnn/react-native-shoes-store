import { Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useFormik } from 'formik'
import { RootStackRouteProps } from '~/navigations/types'
import { nanoid } from '@reduxjs/toolkit'

import { AutoComplete, Box, ButtonOpacity, CustomInput, Header, Typography } from '~/components'
import { BuildingIcon, TrashIcon } from '~/assets/icons'
import { defaultColors, messageAddress, sizes, STATUS, typeIcon } from '~/constants'
import { addressSchema } from '~/schemas'
import { typeIconAddress } from '~/models'
import IconAddress from '../components/IconAddress'
import { getGeometryLocation } from '~/services'
import { useAppDispatch } from '~/store/hooks'
import { saveAddress, deleteAddress } from '~/store/appUserSlice'
import { PopupDeleteAddress } from '~/components/Popup'

const AddressForm = () => {
  const { params } = useRoute<RootStackRouteProps<'AddressForm'>>()
  const { isEdit, addressItem } = params
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const [isSearch, setIsSearch] = useState(false)
  const [showPopupDelete, setShowPopupDelete] = useState(false)
  const [showListIconAddress, setShowListIconAddress] = useState(false)

  const formik = useFormik({
    initialValues: {
      id: addressItem?.id || `${Date.now()}_${nanoid()}`,
      address: addressItem?.description || '',
      name: addressItem?.title || '',
      icon: addressItem?.icon || (typeIcon.home as typeIconAddress),
      note: addressItem?.note || '',
      lat: addressItem?.lat,
      long: addressItem?.long,
    },
    validationSchema: addressSchema,
    onSubmit: (values) => {
      console.log({ values })

      const { address, icon, lat, long, name, note, id } = values

      // Trường hợp không có lat long thì không thể lưu
      if (!lat || !long) {
        setFieldError('address', messageAddress.hasNoLatLong)
        return
      }

      dispatch(
        saveAddress({
          id,
          icon,
          lat: lat,
          long: long,
          title: name,
          note,
          description: address,
        }),
      )
      navigation.goBack()
    },
  })

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    setFieldError,
    setFieldTouched,
  } = formik

  const validateInputField = (name: keyof typeof errors) => {
    if (touched[name] && errors[name]) {
      return errors[name]
    }
    return ''
  }

  const handleGoback = () => {
    navigation.goBack()
  }

  const renderDeleteBtn = () => {
    if (!isEdit) return <Box />

    return (
      <Pressable onPress={() => setShowPopupDelete(true)}>
        <TrashIcon />
      </Pressable>
    )
  }

  const renderHeader = () => {
    return (
      <Header
        goBack={handleGoback}
        title={isEdit ? 'Edit Address' : 'Add new Address'}
        backgroundColor="#fff"
        color="#000"
        customRight={renderDeleteBtn}
      />
    )
  }

  const fetchInfoAddress = async (addressText: string) => {
    try {
      const { content, statusCode } = await getGeometryLocation(addressText)
      if (statusCode === STATUS.SUCCESS_NUM && content) {
        void setFieldValue('address', content.description)
        void setFieldValue('lat', content.lat)
        void setFieldValue('long', content.long)
      } else {
        throw new Error()
      }
    } catch (error) {
      void setFieldValue('address', '')
    }
  }

  const handleChooseAddress = (address: string) => {
    setIsSearch(false)

    void fetchInfoAddress(address)
  }

  const renderBoxAutoComplete = () => {
    if (!isSearch) return null

    return (
      <Box marginTop={10}>
        <AutoComplete keyWord={values.address} onSelectItem={handleChooseAddress} />
      </Box>
    )
  }

  const handleBlurInputAddress = () => {
    setIsSearch(false)
    void setFieldTouched('address')
  }

  /**
   * Hàm xử lý change text địa chỉ
   * reset lat long
   * bật cửa sổ auto complete
   */
  const handleChangeAddress = (text: string) => {
    void setFieldValue('lat', null)
    void setFieldValue('long', null)
    void setFieldValue('address', text)
    setIsSearch(true)
  }

  const renderInputAddress = () => {
    return (
      <Box position="relative">
        <CustomInput
          isRequired={true}
          label="Address"
          onChangeText={handleChangeAddress}
          onBlur={handleBlurInputAddress}
          value={values.address}
          error={validateInputField('address')}
          placeholder="Enter your address"
          containerStyle={{
            borderColor: defaultColors.black,
            borderWidth: 1,
          }}
          labelStyle={{ fontWeight: '600', fontSize: 18 }}
        />
        {renderBoxAutoComplete()}
      </Box>
    )
  }

  const renderInputName = () => {
    return (
      <Box flex={1}>
        <CustomInput
          label="Name"
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          error={validateInputField('name')}
          placeholder="Enter the name here"
          containerStyle={{
            borderColor: defaultColors.black,
            borderWidth: 1,
          }}
          labelStyle={{ fontWeight: '600', fontSize: 18 }}
        />
      </Box>
    )
  }

  const toggleListIconAddress = () => {
    setShowListIconAddress(!showListIconAddress)
  }

  const renderCurrentIcon = () => {
    return (
      <Pressable onPress={toggleListIconAddress}>
        <Box
          marginTop={7}
          borderColor="#000"
          borderWidth={1}
          paddingVertical={14}
          paddingHorizontal={12}
          borderRadius={8}
        >
          <IconAddress typeIcon={values.icon} />
        </Box>
      </Pressable>
    )
  }

  const renderListIcon = () => {
    if (!showListIconAddress) return null

    return (
      <Box
        position="absolute"
        zIndex={1}
        right={0}
        top="32%"
        backgroundColor="white"
        borderRadius={8}
        borderColor="#000"
        borderWidth={1}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        width={108}
      >
        {Object.keys(typeIcon).map((item) => (
          <Box key={item} padding={10}>
            <Pressable
              onPress={() => {
                void setFieldValue('icon', item as typeIconAddress)
                setShowListIconAddress(false)
              }}
            >
              <IconAddress typeIcon={item as typeIconAddress} />
            </Pressable>
          </Box>
        ))}
      </Box>
    )
  }

  const renderIconTypeAddress = () => {
    return (
      <Box marginLeft={20}>
        <Typography textAlign="center" fontSize={18} fontWeight="600">
          Icon
        </Typography>
        {renderCurrentIcon()}
        {renderListIcon()}
      </Box>
    )
  }

  const renderInputNote = () => {
    return (
      <Box marginTop={20}>
        <CustomInput
          multiline
          textAlignVertical="top"
          label="Special instructions"
          onChangeText={handleChange('note')}
          onBlur={handleBlur('note')}
          value={values.note}
          error={validateInputField('note')}
          placeholder="Building, door, floor..."
          containerStyle={{
            borderColor: defaultColors.black,
            borderWidth: 1,
            height: 130,
          }}
          inputStyle={{
            height: '100%',
          }}
          labelStyle={{ fontWeight: '600', fontSize: 18 }}
        />
      </Box>
    )
  }

  const renderForm = () => {
    return (
      <Box>
        {renderInputAddress()}
        <Box marginTop={16} flexDirection="row" alignItems="flex-start">
          {renderInputName()}
          {renderIconTypeAddress()}
        </Box>
        {renderInputNote()}
      </Box>
    )
  }

  const renderBtnSubmit = () => {
    return (
      <Box position="absolute" bottom="4%" left={sizes.horizontal} right={sizes.horizontal}>
        <ButtonOpacity
          backgroundColor="#000"
          textColor="white"
          title="Save"
          customStyleButton={{ borderColor: '#000', borderWidth: 1 }}
          onPress={handleSubmit}
        />
      </Box>
    )
  }

  const renderIconBuilding = () => {
    return (
      <Box alignItems="flex-end" marginTop={20}>
        <BuildingIcon />
      </Box>
    )
  }

  const renderContent = () => {
    return (
      <Box paddingHorizontal={sizes.horizontal} marginTop={10}>
        {renderForm()}
      </Box>
    )
  }

  // Xử lý khi người dùng chạm vào màn hình
  const handleTouchResponder = () => {
    setShowListIconAddress(false)
    setIsSearch(false)
  }

  const handleDeleteAddress = () => {
    dispatch(
      deleteAddress({
        id: values.id,
      }),
    )
    navigation.goBack()
  }

  const renderPopupDeleteAddress = () => {
    return (
      <PopupDeleteAddress
        isVisible={showPopupDelete}
        onCloseModal={() => setShowPopupDelete(false)}
        onConfirmDelete={handleDeleteAddress}
      />
    )
  }

  return (
    <Box
      flex={1}
      backgroundColor="#fff"
      onStartShouldSetResponder={() => (showListIconAddress ? true : false)}
      onResponderGrant={handleTouchResponder}
    >
      {renderHeader()}
      <ScrollView style={{ flex: 1 }} nestedScrollEnabled={true}>
        {renderContent()}
        {renderIconBuilding()}
      </ScrollView>
      {renderBtnSubmit()}
      {renderPopupDeleteAddress()}
    </Box>
  )
}

export default AddressForm
