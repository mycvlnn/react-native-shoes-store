import { ActivityIndicator, Pressable, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Box, ButtonOpacity, Header, Typography } from '~/components'
import { XMarkIcon } from '~/assets/icons'
import { defaultColors, sizes, STATUS, textColor } from '~/constants'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '~/store/hooks'
import { getDataCart, totalMoneyCart } from '~/store/cartSlice/selector'
import CartItem from './components/CartItem'

import PopupConfirmClearCart from '~/components/Popup/ConfirmClearCart'
import { orderItem } from '~/services'
import { appUserSelector } from '~/store/appUserSlice/selector'
import CartEmpty from './components/CartEmpty'
import { clearCart } from '~/store/cartSlice'

const YourCart = () => {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const inforUser = useAppSelector(appUserSelector)
  const dataCart = useAppSelector(getDataCart)
  const totalMoney = useAppSelector(totalMoneyCart)
  const [isShowPoup, setIsShowPoupConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const renderLeftIcon = () => {
    return <XMarkIcon size={16} />
  }

  const handleClearAll = () => {
    setIsShowPoupConfirm(true)
  }

  const renderRight = () => {
    if (dataCart.length === 0) return null

    return (
      <Pressable onPress={handleClearAll}>
        <Typography fontSize={18} fontWeight="600" color="red">
          Clear all
        </Typography>
      </Pressable>
    )
  }

  const handleGoback = () => {
    navigation.goBack()
  }

  const renderHeader = () => {
    return (
      <Header
        goBack={handleGoback}
        customBack={renderLeftIcon}
        title=""
        backgroundColor={defaultColors.background}
        customRight={renderRight}
      />
    )
  }

  const renderListItemCart = () => {
    return dataCart.map((cartItem) => {
      return <CartItem key={cartItem.primaryKey} {...cartItem} />
    })
  }

  const renderTotal = () => {
    return (
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={18} fontWeight="600">
          Total
        </Typography>
        <Typography fontSize={22} fontWeight="700">
          ${totalMoney}
        </Typography>
      </Box>
    )
  }

  const handleCheckout = async () => {
    setIsLoading(true)

    const { statusCode } = await orderItem({
      email: inforUser.email || '',
      orderDetail: dataCart.map((item) => ({
        productId: item.id.toString(),
        quantity: item.quantity,
      })),
    })

    const isSuccess = statusCode === STATUS.SUCCESS_NUM

    navigation.navigate('Checkout', { success: isSuccess })

    if (isSuccess) {
      dispatch(clearCart())
    }

    setIsLoading(false)
  }

  const renderBtnCheckout = () => {
    return (
      <Box>
        <ButtonOpacity
          customStyleButton={{ marginTop: 10 }}
          backgroundColor={textColor}
          textColor="white"
          onPress={() => void handleCheckout()}
          leftIcon={isLoading && <ActivityIndicator size="small" />}
          title={isLoading ? 'Loading...' : 'Proceed to checkout'}
          disabled={isLoading}
        />
      </Box>
    )
  }

  const renderPopupConfirmClearAll = () => {
    return (
      <PopupConfirmClearCart
        isVisible={isShowPoup}
        onCloseModal={() => setIsShowPoupConfirm(false)}
      />
    )
  }

  const renderContent = () => {
    if (dataCart.length === 0) {
      return <CartEmpty />
    }

    return (
      <>
        <ScrollView>{renderListItemCart()}</ScrollView>

        <Box paddingVertical={20} width="100%" justifyContent="center">
          {renderTotal()}
          {renderBtnCheckout()}
        </Box>
      </>
    )
  }

  return (
    <Box flex={1} backgroundColor={defaultColors.background}>
      {renderHeader()}
      <Box paddingHorizontal={sizes.horizontal} flex={1}>
        <Typography fontSize={40} fontWeight="bold" marginBottom={20}>
          My cart
        </Typography>
        {renderContent()}
      </Box>
      {renderPopupConfirmClearAll()}
    </Box>
  )
}

export default YourCart
