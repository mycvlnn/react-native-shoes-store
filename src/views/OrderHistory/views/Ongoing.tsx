import React, { MutableRefObject, useRef } from 'react'
import { useOrderHistoryContex } from '../context/OrderHistoryProvider'
import { Box, ScrollToTop, TextWithLine } from '~/components'
import ItemOrderHistory from '../components/ItemOrderHistory'
import EmptyData from '../components/EmptyData'
import { FORMAT_DATE, sizes } from '~/constants'
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

const Ongoing = () => {
  const { dataOngoing } = useOrderHistoryContex()

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

  const handleDetail = () => {}

  const renderListOrderHistory = () => {
    return dataOngoing.map((item) => {
      const { id, orderDetail, date } = item

      return (
        <Box key={id}>
          <Box marginTop={10}>
            <TextWithLine label={dayjs(date).format(FORMAT_DATE.ll)} />
          </Box>
          {orderDetail.map((item) => (
            <ItemOrderHistory key={item.alias} {...item} onPress={handleDetail} type="ongoing" />
          ))}
        </Box>
      )
    })
  }

  if (dataOngoing.length === 0)
    return (
      <EmptyData
        title="No ongoing order"
        description="Start a new order to see it here or find
      previous ones in the ‘History” tab."
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

export default Ongoing
