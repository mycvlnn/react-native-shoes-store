import React, { MutableRefObject, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { FlatList, ListRenderItem, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { Box, ButtonOpacity } from '~/components'
import { onboardingImage1, onboardingImage3, onboardingImage4 } from '~/assets/img'
import SlideItem, { ISlide } from './SlideItem'
import { height, sizes, width } from '~/constants'
import Pagination from './Pagination'
import { RootStackNavigationProps } from '~/navigations/types'
import { appUserSelector } from '~/store/appUserSlice/selector'
import { routes } from '~/routes'
import { setIsFirstLauchApp } from '~/store/appUserSlice'

const DATA = [
  { id: '1', image: onboardingImage1, title: 'We provide high quality products just for you' },
  { id: '2', image: onboardingImage3, title: 'Your satisfaction is our number one priority' },
  {
    id: '3',
    image: onboardingImage4,
    title: "Let's fulfill your fashion needs with Sneaker 1999 right now!",
  },
]

const Onboarding = () => {
  const dispatch = useDispatch()
  const { isLogin } = useSelector(appUserSelector)
  const navigation = useNavigation<RootStackNavigationProps<'Onboarding'>>()
  const [currentIndexActive, setCurrentIndexActive] = useState(0)
  const refFlatList = useRef() as MutableRefObject<FlatList>

  const renderPagination = () => {
    return (
      <Box
        position="absolute"
        bottom="15%"
        flexDirection="row"
        width="100%"
        justifyContent="center"
      >
        {DATA.map((_, index) => (
          <Pagination key={index} active={currentIndexActive === index} />
        ))}
      </Box>
    )
  }

  const handleSwipeSlide = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { x } = event.nativeEvent.contentOffset

    const nexIndex = Math.round(x / width)
    setCurrentIndexActive(nexIndex)
  }

  const handleNextSlide = () => {
    const nextSlideIndex = currentIndexActive + 1
    if (nextSlideIndex !== DATA.length) {
      const offset = nextSlideIndex * width
      refFlatList.current.scrollToOffset({ offset })
      setCurrentIndexActive(nextSlideIndex)
    } else {
      const router = isLogin ? routes.BottomTab : routes.Authen
      const screen = isLogin ? routes.Home : routes.SignIn
      dispatch(setIsFirstLauchApp(false))
      navigation.replace(router, {
        screen,
      })
    }
  }

  const renderBtnFooter = () => {
    const lastIndex = currentIndexActive === DATA.length - 1

    const name = lastIndex ? 'Get started' : 'Next'

    return (
      <Box position="absolute" bottom="4%" left={sizes.horizontal} right={sizes.horizontal}>
        <ButtonOpacity
          backgroundColor="#000"
          textColor="#fff"
          title={name}
          onPress={handleNextSlide}
        />
      </Box>
    )
  }

  const renderItemList: ListRenderItem<ISlide> = ({ item }) => {
    return <SlideItem image={item.image} title={item.title} />
  }

  return (
    <Box flex={1}>
      <FlatList
        onMomentumScrollEnd={handleSwipeSlide}
        pagingEnabled
        data={DATA}
        contentContainerStyle={{ height: height }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItemList}
        ref={refFlatList}
      />
      {renderPagination()}
      {renderBtnFooter()}
    </Box>
  )
}

export default Onboarding
