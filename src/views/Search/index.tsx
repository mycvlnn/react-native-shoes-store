import { Dimensions, Pressable, TextInput } from 'react-native'
import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import {
  Box,
  CustomInput,
  ErrorServer,
  LoadingComponent,
  ScrollToTop,
  Typography,
} from '~/components'
import { defaultColors, sizes, STATUS } from '~/constants'
import { CloseCircleIcon, LineGradient, SearchGradientIcon, SearchIcon } from '~/assets/icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useDebounce } from '~/hooks'
import { searchProduct } from '~/services'
import { IProductDetail } from '~/services/models'
import SearchEmpty from './components/SearchEmpty'
import ProductItem from './components/ProductItem'

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated'

const Search = () => {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()
  const [searchText, setSearchText] = useState('')
  const searchDebounced = useDebounce(searchText, 500)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [listProductSearch, setListProductSearch] = useState<IProductDetail[]>([])
  const refSearch = useRef() as MutableRefObject<TextInput>
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

  const handleClearAllText = () => {
    setSearchText('')
    setListProductSearch([])
    refSearch.current?.blur()
  }

  const renderIconClearTextSearch = () => {
    if (!searchText) return null

    return (
      <Pressable hitSlop={20} onPress={handleClearAllText}>
        <CloseCircleIcon size={24} />
      </Pressable>
    )
  }

  const handleSearchShoes = (text: string) => {
    setLoading(true)
    setSearchText(text)
    setError(false)
  }

  const fetchSearchApi = useCallback(async (keyword: string) => {
    try {
      const { statusCode, content } = await searchProduct(keyword)
      if (statusCode === STATUS.SUCCESS_NUM) {
        setListProductSearch(content || [])
      }
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!searchDebounced.trim()) {
      setListProductSearch([])
      setLoading(false)
      return
    }

    void fetchSearchApi(searchDebounced)
  }, [searchDebounced, fetchSearchApi])

  const renderInputSearch = () => {
    return (
      <Box
        flexDirection="row"
        alignItems="center"
        paddingHorizontal={sizes.horizontal}
        paddingTop={insets.top}
        backgroundColor="white"
      >
        <Box flex={1}>
          <CustomInput
            label=""
            onChangeText={handleSearchShoes}
            value={searchText}
            placeholder="What are you looking for?"
            leftIcon={<SearchIcon size={19} color={defaultColors.black} />}
            rightIcon={renderIconClearTextSearch()}
            containerStyle={{
              borderColor: defaultColors.black,
              borderWidth: 1,
              height: 50,
              paddingHorizontal: 20,
            }}
            ref={refSearch}
            placeholderTextColor={defaultColors.gray}
            radius={30}
          />
        </Box>
        <Pressable hitSlop={20} onPress={() => navigation.goBack()}>
          <Typography fontSize={16} fontWeight="600" marginLeft={10}>
            Cancel
          </Typography>
        </Pressable>
      </Box>
    )
  }

  const renderListProduct = () => {
    return (
      <Box padding={sizes.horizontal}>
        <Box flexDirection="row" alignItems="center" marginBottom={10}>
          <Typography fontSize={24} fontWeight="700">
            {searchText}:
          </Typography>
          <Typography fontSize={20} fontWeight="500" marginLeft={10}>
            {listProductSearch.length}
          </Typography>
        </Box>
        <Animated.ScrollView
          ref={refScrollView}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: '30%' }}
          showsVerticalScrollIndicator={false}
        >
          {listProductSearch.map((item) => {
            return <ProductItem key={item.id} {...item} />
          })}
        </Animated.ScrollView>
      </Box>
    )
  }

  const renderLoading = () => {
    return <LoadingComponent />
  }

  // Hiển thị icon search gradient và text khi chưa search gì
  const renderSearchPlaceholder = () => {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <SearchGradientIcon width={200} height={125} />
        <Typography fontSize={26} fontWeight="700">
          Search for shoes
        </Typography>
        <Typography fontSize={18} fontWeight="500" marginTop={6}>
          Search for shoes by writing its name.
        </Typography>
      </Box>
    )
  }

  let content: React.ReactNode = renderSearchPlaceholder()

  if (loading) content = renderLoading()

  if (!loading && listProductSearch.length > 0) content = renderListProduct()

  if (!loading && listProductSearch.length <= 0 && searchText) content = <SearchEmpty />

  if (error) content = <ErrorServer onRetry={() => void fetchSearchApi(searchDebounced)} />

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
    <Box backgroundColor="white" flex={1}>
      {renderInputSearch()}

      <Box marginTop={20}>
        <LineGradient width={Dimensions.get('screen').width} />
      </Box>
      {content}
      {renderCircleScrollToTop()}
    </Box>
  )
}

export default Search
