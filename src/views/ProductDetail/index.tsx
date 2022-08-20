import { Pressable, RefreshControl, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Box, ErrorServer, Header, Loading, Typography } from '~/components'
import { defaultColors, primaryBold, primaryColor, sizes, STATUS } from '~/constants'
import BoxShadow from '../Home/components/BoxShadow'
import { ChevronBigLeft, FavoriteOutline, MinusIcon, PlusIcon, StarIcon } from '~/assets/icons'
import ListImageDetail from './components/ListImageDetail'
import { RootStackRouteProps } from '~/navigations/types'
import { getDetailProductApi, toogleFavoriteProductItem } from '~/services'
import { IProductDetail } from '~/services/models'
import { useAppDispatch } from '~/store/hooks'
import { addToCart } from '~/store/cartSlice'

export const MAX_QUANTITY = 99
export const MIN_QUANTITY = 1

const ProductDetail = () => {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const { params } = useRoute<RootStackRouteProps<'ProductDetail'>>()

  const [data, setData] = useState<IProductDetail>()
  const [isRefresh, setIsRefresh] = useState<boolean>(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [totalQuantity, setTotalQuantity] = useState(0)

  const [sizeSelected, setSizeSelected] = useState<string>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const renderBackIcon = () => {
    return (
      <BoxShadow>
        <ChevronBigLeft width={18} height={18} color="#000" />
      </BoxShadow>
    )
  }

  // TODO: Cần phải xử lý thêm trường hợp chưa đăng nhập
  const toggleFavoriteItem = async () => {
    try {
      const id = params.id

      const { statusCode } = await toogleFavoriteProductItem(id, !isFavorite)

      if (statusCode === STATUS.SUCCESS_NUM) {
        setIsFavorite(!isFavorite)
      }
    } catch (error) {
      // nothing
    }
  }

  const renderFavorite = () => {
    return (
      <Pressable hitSlop={4} onPress={() => void toggleFavoriteItem()}>
        <BoxShadow>
          <FavoriteOutline size={18} fillColor={isFavorite ? 'red' : 'white'} color="red" />
        </BoxShadow>
      </Pressable>
    )
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  const handleControlQuantity = (controlNumber: number) => {
    if (
      (quantity === MAX_QUANTITY && controlNumber === 1) ||
      (quantity === MIN_QUANTITY && controlNumber === -1) ||
      (quantity >= totalQuantity && controlNumber === 1)
    )
      return

    setQuantity((prevQuantity) => prevQuantity + controlNumber)
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - controlNumber)
  }

  const renderBtnControl = () => {
    return (
      <Box
        flexDirection="row"
        alignItems="center"
        borderRadius={12}
        backgroundColor="#000"
        position="absolute"
        left={sizes.horizontal}
        top={-20}
      >
        <TouchableOpacity
          onPress={() => handleControlQuantity(-1)}
          activeOpacity={0.7}
          style={{ paddingVertical: 12, paddingHorizontal: 20 }}
        >
          <MinusIcon color="white" />
        </TouchableOpacity>
        <Typography fontSize={18} fontWeight="700" color={primaryColor}>
          {quantity}
        </Typography>
        <TouchableOpacity
          onPress={() => handleControlQuantity(1)}
          activeOpacity={0.7}
          style={{ paddingVertical: 12, paddingHorizontal: 20 }}
        >
          <PlusIcon color="white" />
        </TouchableOpacity>
      </Box>
    )
  }

  const renderTotalQuantity = () => {
    return (
      <Typography marginLeft="auto" fontSize={20} fontWeight="600" paddingVertical={10}>
        x {totalQuantity}
      </Typography>
    )
  }

  const renderInfoShoes = () => {
    return (
      <Box flexDirection="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography fontSize={26} fontWeight="700">
            {data?.name}
          </Typography>
          <Typography marginTop={12} color={defaultColors.gray} width="90%">
            {data?.shortDescription}
          </Typography>
        </Box>
        <Typography fontWeight="700" fontSize={24}>
          ${data?.price}
        </Typography>
      </Box>
    )
  }

  const renderSizes = () => {
    if (!data?.size) return null

    return (
      <Box
        marginTop={20}
        flexDirection="row"
        alignItems="center"
        borderBottomColor={defaultColors.gray}
        borderBottomWidth={0.5}
        paddingBottom={20}
      >
        <Typography fontSize={16} fontWeight="600" marginRight={20}>
          Size
        </Typography>
        <Box flexDirection="row">
          {data.size.slice(0, 5).map((item) => {
            const isActive = sizeSelected === item

            return (
              <Pressable key={item} onPress={() => setSizeSelected(item)}>
                <Box
                  borderColor={isActive ? primaryBold : 'black'}
                  borderWidth={1}
                  borderRadius={100}
                  padding={12}
                  marginHorizontal={10}
                  backgroundColor={isActive ? primaryBold : 'white'}
                >
                  <Typography color={isActive ? 'white' : 'black'}>{item}</Typography>
                </Box>
              </Pressable>
            )
          })}
        </Box>
      </Box>
    )
  }

  const renderDescription = () => {
    return (
      <Box paddingTop={20}>
        <Box flexDirection="row" alignItems="center" justifyContent="space-between">
          <Typography fontSize={20} fontWeight="600">
            Description
          </Typography>
          <Box
            backgroundColor="#f8f8f8"
            paddingHorizontal={16}
            paddingVertical={4}
            borderRadius={18}
            flexDirection="row"
            alignItems="center"
          >
            <StarIcon color={primaryBold} />
            <Typography fontSize={14} marginLeft={8}>
              4.8
            </Typography>
          </Box>
        </Box>
        <Typography marginTop={30} fontSize={16}>
          {data?.description}
        </Typography>
      </Box>
    )
  }

  const handleAddToCart = () => {
    if (!data) return
    const { image, id, shortDescription, price, name } = data

    const primaryKey = `${id}-${sizeSelected as string}`

    dispatch(
      addToCart({
        id,
        image,
        shortDescription,
        name,
        size: Number(sizeSelected),
        price,
        quantity,
        primaryKey,
      }),
    )
    navigation.goBack()
  }

  const renderBtnAddToCart = () => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={handleAddToCart}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor="#000"
          paddingVertical={20}
          paddingHorizontal={20}
          borderRadius={15}
        >
          <Typography color="white" fontSize={18} fontWeight="700">
            Add to cart
          </Typography>
          <Typography color="white" fontSize={20} fontWeight="700">
            ${quantity * (data?.price ?? 0)}
          </Typography>
        </Box>
      </TouchableOpacity>
    )
  }

  const getDetailProduct = useCallback(async () => {
    const id = params.id

    setLoading(true)
    try {
      const { statusCode, content } = await getDetailProductApi(id)
      if (statusCode === STATUS.SUCCESS_NUM) {
        if (!content) return
        setData(content)
        setSizeSelected(content?.size[0])
        setTotalQuantity(content.quantity)
        setIsRefresh(false)
        setError(false)
      } else {
        setError(true)
      }
    } catch (error) {
      setError(true)
    }

    setLoading(false)
  }, [params.id])

  useEffect(() => {
    void getDetailProduct()
  }, [getDetailProduct])

  if (!error && loading) return <Loading />

  const handleRetryData = () => {
    void getDetailProduct()
  }

  if (error) return <ErrorServer onRetry={handleRetryData} />

  const onRefreshData = () => {
    setIsRefresh(true)
    void getDetailProduct()
  }

  return (
    <Box flex={1}>
      <ListImageDetail data={data?.relatedProducts || []} />
      <Header
        goBack={handleGoBack}
        customBack={renderBackIcon}
        customRight={renderFavorite}
        backgroundColor="transparent"
        position="absolute"
      />

      <Box
        backgroundColor="white"
        height="60%"
        position="absolute"
        zIndex={2}
        bottom={0}
        width="100%"
        borderTopRightRadius={30}
        borderTopLeftRadius={30}
        paddingHorizontal={sizes.horizontal}
        paddingVertical={10}
      >
        {renderBtnControl()}
        {renderTotalQuantity()}
        <ScrollView
          refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={onRefreshData} />}
        >
          {renderInfoShoes()}
          {renderSizes()}
          {renderDescription()}
        </ScrollView>
        <Box marginBottom={20}>{renderBtnAddToCart()}</Box>
      </Box>
    </Box>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})
