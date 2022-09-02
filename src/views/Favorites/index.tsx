import { FlatList, ListRenderItem } from 'react-native'
import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { Box, CustomInput, ErrorServer, Header, LoadingComponent, ScrollToTop } from '~/components'
import { defaultColors, sizes, STATUS } from '~/constants'
import { SearchIcon } from '~/assets/icons'
import FavoriteItem from './components/FavoriteItem'
import { IProductFavorite } from '~/services/models'
import EmptyFavorite from './components/EmptyFavorite'
import { getListProductFavorite, toggleFavoriteProductItem } from '~/services'
import Unauthorized from '~/components/Popup/Unauthorized'
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

const Favorites = () => {
  const navigation = useNavigation()
  const [listFavorite, setListFavorite] = useState<IProductFavorite[]>([])
  const [dataSearchFavorite, setDataSearchFavorite] = useState<IProductFavorite[]>([])

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)
  const isMounted = useIsFocused()
  const refFlatList = useRef() as MutableRefObject<FlatList<IProductFavorite>>
  const scrollY = useSharedValue(0)

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

  const goBack = () => {
    navigation.goBack()
  }

  const renderHeader = () => {
    return (
      <Header
        color={defaultColors.black}
        goBack={goBack}
        title="Favorites"
        backgroundColor="#fff"
      />
    )
  }

  const handleSearch = (text: string) => {
    setListFavorite(dataSearchFavorite.filter((item) => item.name.includes(text)))
  }

  const renderInputSearch = () => {
    return (
      <Box>
        <CustomInput
          onChangeText={handleSearch}
          placeholder="Search your favorite item"
          leftIcon={<SearchIcon size={18} />}
          backgroundColor="#f0f0f0"
          radius={16}
          containerStyle={{ paddingHorizontal: 16 }}
        />
      </Box>
    )
  }

  const onUnFavorite = async (id: number) => {
    setListFavorite((prevListFavorite) => prevListFavorite.filter((item) => item.id !== id))
    try {
      await toggleFavoriteProductItem(id, false)
    } catch (error) {
      // nothing
    }
  }

  const getListFavorite = useCallback(async () => {
    setIsLoading(true)
    try {
      const { content, statusCode } = await getListProductFavorite()
      if (statusCode === STATUS.SUCCESS_NUM && content) {
        const { productsFavorite } = content
        setListFavorite(productsFavorite)
        setDataSearchFavorite(productsFavorite)
      } else {
        setIsError(true)
      }
      if (statusCode === STATUS.UNAUTHORIZED) {
        setVisibleModal(true)
      }
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (isMounted) {
      void getListFavorite()
    }
  }, [getListFavorite, isMounted])

  const renderItem: ListRenderItem<IProductFavorite> = ({ item }) => {
    return <FavoriteItem {...item} onUnFavorite={() => void onUnFavorite(item.id)} />
  }

  const renderListFavorite = () => {
    return (
      <FlatList
        onScroll={(e) => (scrollY.value = e.nativeEvent.contentOffset.y)}
        ref={refFlatList}
        contentContainerStyle={{ paddingBottom: '20%' }}
        showsVerticalScrollIndicator={false}
        data={listFavorite}
        renderItem={renderItem}
        keyExtractor={(item: IProductFavorite) => item.id.toString()}
        ListEmptyComponent={<EmptyFavorite />}
        scrollEventThrottle={16}
      />
    )
  }

  const scrollToTopHandler = () => {
    refFlatList.current?.scrollToOffset({
      offset: 0,
      animated: true,
    })
  }

  const renderBtnScrollToTop = () => {
    return <ScrollToTop styleAnimation={animatedStyles} onPress={scrollToTopHandler} />
  }

  const renderContent = () => {
    if (isLoading) return <LoadingComponent />

    if (!isLoading && isError) return <ErrorServer onRetry={() => void getListFavorite()} />

    return (
      <Box flex={1}>
        <Box marginHorizontal={sizes.horizontal}>{renderInputSearch()}</Box>
        <Box marginTop={20}>{renderListFavorite()}</Box>
        {renderBtnScrollToTop()}
      </Box>
    )
  }

  const renderBoxUnauthorized = () => {
    if (!visibleModal) return null

    return <Unauthorized isVisible={visibleModal} onCloseModal={() => setVisibleModal(false)} />
  }

  return (
    <Box flex={1} backgroundColor="white">
      {renderHeader()}
      {renderContent()}
      {renderBoxUnauthorized()}
    </Box>
  )
}

export default Favorites
