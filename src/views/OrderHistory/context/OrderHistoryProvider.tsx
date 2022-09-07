import { useIsFocused } from '@react-navigation/native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ErrorServer, Loading } from '~/components'
import { STATUS } from '~/constants'
import { getInfoUser } from '~/services'
import { IOrderHistory } from '~/services/models'
import dayjs from 'dayjs'
import Unauthorized from '~/components/Popup/Unauthorized'

// Hàm kiểm tra nếu đơn hàng trước ngày hôm nay thì coi như là history. Ngược lại nếu trong ngày hôm nay thì là ongoing
const isOrderHistory = (date: string) => {
  return dayjs().isAfter(dayjs(date), 'days')
}

interface IOrderHistoryContext {
  dataOngoing: IOrderHistory[]
  dataOrderHistory: IOrderHistory[]
}

export const OrderHistoryContext = React.createContext<IOrderHistoryContext>({
  dataOngoing: [],
  dataOrderHistory: [],
})

const OrderHistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const isMounted = useIsFocused()
  const [dataOngoing, setDataOngoing] = useState<IOrderHistory[]>([])
  const [dataOrderHistory, setDataOrderHistory] = useState<IOrderHistory[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [showPopupUnauthorized, setShowPopupUnauthorized] = useState(false)

  const getInfoUserApi = useCallback(async () => {
    setLoading(true)

    try {
      const { statusCode, content } = await getInfoUser()
      if (statusCode === STATUS.SUCCESS_NUM && content) {
        setError(false)
        const dataOngoingUpdated: IOrderHistory[] = []
        const dataHistoryUpdated: IOrderHistory[] = []

        content.ordersHistory.forEach((item) => {
          if (isOrderHistory(item.date)) {
            dataHistoryUpdated.push(item)
          } else {
            dataOngoingUpdated.push(item)
          }
        })

        setDataOngoing(dataOngoingUpdated)
        setDataOrderHistory(dataHistoryUpdated)
      } else if (statusCode === STATUS.UNAUTHORIZED) {
        setError(true)
        setShowPopupUnauthorized(true)
      }
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (isMounted) {
      void getInfoUserApi()
    }
  }, [isMounted, getInfoUserApi])

  const value: IOrderHistoryContext = {
    dataOngoing,
    dataOrderHistory,
  }

  const renderContent = () => {
    if (loading) return <Loading />

    if (error) return <ErrorServer onRetry={() => void getInfoUserApi()} />

    return children
  }

  const renderPopupUnauthorized = () => {
    if (!showPopupUnauthorized) return null

    return (
      <Unauthorized
        isVisible={showPopupUnauthorized}
        onCloseModal={() => setShowPopupUnauthorized(false)}
      />
    )
  }

  return (
    <OrderHistoryContext.Provider value={value}>
      {renderContent()}
      {renderPopupUnauthorized()}
    </OrderHistoryContext.Provider>
  )
}

export default OrderHistoryProvider

export const useOrderHistoryContex = () => {
  return useContext<IOrderHistoryContext>(OrderHistoryContext)
}
