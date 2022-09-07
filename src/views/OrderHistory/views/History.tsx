import React, { MutableRefObject, useRef } from 'react'
import { useOrderHistoryContex } from '../context/OrderHistoryProvider'
import { Box, ScrollToTop, TextWithLine } from '~/components'
import { FORMAT_DATE, sizes } from '~/constants'
import ItemOrderHistory from '../components/ItemOrderHistory'
import EmptyData from '../components/EmptyData'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated'

const History = () => {
  const { dataOrderHistory } = useOrderHistoryContex()
  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollY.value = e.contentOffset.y
    },
  })

  const refScrollView = useRef() as MutableRefObject<Animated.ScrollView>

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [0, 100], [0, 1], {
      extrapolateRight: Extrapolation.CLAMP,
    })

    const opacity = interpolate(scrollY.value, [0, 100], [0, 1], {
      extrapolateRight: Extrapolation.CLAMP,
    })

    return {
      transform: [{ scale: scale }],
      opacity: opacity,
    }
  })

  const handleReOrder = () => {}

  const renderListOrderHistory = () => {
    return dataOrderHistory.map((item) => {
      const { id, orderDetail, date } = item

      if (!orderDetail.length) return null

      return (
        <Box key={id}>
          <Box marginTop={10}>
            <TextWithLine label={dayjs(date).format(FORMAT_DATE.ll)} />
          </Box>
          {orderDetail.map((item) => (
            <ItemOrderHistory key={item.alias} {...item} onPress={handleReOrder} type="history" />
          ))}
        </Box>
      )
    })
  }

  if (dataOrderHistory.length === 0)
    return (
      <EmptyData
        title="No order history"
        description="Complete an order to see it here or find
  on going orders in the ‘On going” tab."
      />
    )

  const scrollToTopHandler = () => {
    refScrollView.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    })
  }

  const renderCircleScrollToTop = () => {
    return <ScrollToTop styleAnimation={animatedStyles} onPress={scrollToTopHandler} />
  }

  return (
    <Box flex={1} backgroundColor="#fff" padding={sizes.horizontal}>
      <Animated.ScrollView
        ref={refScrollView}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
      >
        {renderListOrderHistory()}
      </Animated.ScrollView>
      {renderCircleScrollToTop()}
    </Box>
  )
}

export default History
