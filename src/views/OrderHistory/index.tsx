import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box, Header } from '~/components'
import { defaultColors } from '~/constants'
import TopBarHeader from './components/TopBarHeader'
import OrderHistoryProvider from './context/OrderHistoryProvider'

const OrderHistory = () => {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  const renderHeader = () => {
    return (
      <Header color={defaultColors.black} goBack={goBack} title="Orders" backgroundColor="#fff" />
    )
  }

  const renderTopBarHeader = () => {
    return <TopBarHeader />
  }

  return (
    <OrderHistoryProvider>
      <Box flex={1}>
        {renderHeader()}
        {renderTopBarHeader()}
      </Box>
    </OrderHistoryProvider>
  )
}

export default OrderHistory
