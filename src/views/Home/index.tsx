import React, { useCallback, useEffect, useState } from 'react'
import { BadgeNotification, Box, Header, Typography } from '~/components'
import { Pressable, RefreshControl, ScrollView, StyleSheet } from 'react-native'

import { useAppSelector } from '~/store/hooks'

import { useNavigation } from '@react-navigation/native'

import { primaryBold, primaryColor, sizes, STATUS } from '~/constants'
import { BagRegular, LocationSolid, MenuIconLeft } from '~/assets/icons'
import BoxShadow from './components/BoxShadow'
import Banner from './components/Banner'
import { getAllCategory, getProductByCategoryId } from '~/services'
import { ICategory, IProductDetail } from '~/services/models'
import ProductItem from './components/ProductItem'
import { hasCart } from '~/store/cartSlice/selector'
import { appUserSelector } from '~/store/appUserSlice/selector'
import StoreList from '~views/StoreList'

const Home = () => {
  const navigation = useNavigation()
  const isCart = useAppSelector(hasCart)
  const { address } = useAppSelector(appUserSelector)

  const [idActiveCategory, setIdActiveCategory] = useState('')
  const [categories, setCategories] = useState<ICategory[]>([])
  const [listProduct, setListProduct] = useState<IProductDetail[]>([])
  const [isRefresh, setIsRefresh] = useState(false)

  const handleClickCategory = (id: string) => {
    setIdActiveCategory(id)
  }

  const renderLocation = () => {
    const { currentLocation } = address
    let nameLocation = ''

    if (!currentLocation) {
      nameLocation = 'Choose location'
    } else {
      const { icon, title, description } = currentLocation
      nameLocation = (icon === 'clock' ? description : title) || ''
    }

    return (
      <Pressable onPress={() => navigation.navigate('Address')} style={{ alignItems: 'center' }}>
        <Box flexDirection="row" alignItems="center" justifyContent="center" width="80%">
          <LocationSolid size={12} color={primaryBold} />
          <Typography marginLeft={8} numberOfLines={1} textAlign="center">
            {nameLocation}
          </Typography>
        </Box>
      </Pressable>
    )
  }

  const renderCustomTitle = () => {
    return (
      <Box justifyContent="center" flex={1}>
        <Typography textAlign="center" marginBottom={8} fontSize={14} color="#888">
          My location
        </Typography>
        {renderLocation()}
      </Box>
    )
  }

  const renderLeftIcon = () => {
    return (
      <BoxShadow>
        <MenuIconLeft size={22} />
      </BoxShadow>
    )
  }

  const renderBagIcon = () => {
    return (
      <Pressable onPress={() => navigation.navigate('YourCart')}>
        <BoxShadow>
          <BagRegular size={24} />
          <BadgeNotification isShow={isCart} right={8} top={8} />
        </BoxShadow>
      </Pressable>
    )
  }

  const renderHeader = () => {
    return (
      <Box backgroundColor="#fff">
        <Header
          goBack={() => {}}
          customBack={renderLeftIcon}
          customTitle={renderCustomTitle}
          customRight={renderBagIcon}
          backgroundColor="#fff"
        />
      </Box>
    )
  }

  const renderBanner = () => {
    return <Banner />
  }

  const renderListOfCategories = () => {
    return (
      <Box marginTop={20}>
        <Typography fontSize={20} fontWeight="700" marginBottom={20} marginLeft={sizes.horizontal}>
          Most Popular
        </Typography>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Box flexDirection="row" paddingHorizontal={sizes.horizontal}>
            {categories.map((data) => {
              const isActive = idActiveCategory === data.id

              return (
                <Pressable
                  key={data.id}
                  style={[
                    {
                      backgroundColor: isActive ? '#000' : '#fff',
                      borderColor: isActive ? primaryColor : '#000',
                    },
                    styles.category,
                  ]}
                  onPress={() => handleClickCategory(data.id)}
                >
                  <Typography color={isActive ? '#fff' : '#000'}>{data.category}</Typography>
                </Pressable>
              )
            })}
          </Box>
        </ScrollView>
      </Box>
    )
  }

  const goToDetailProduct = (id: number) => {
    navigation.navigate('ProductDetail', { id })
  }

  const renderListProduct = () => {
    return (
      <Box marginTop={30} marginBottom={30} paddingHorizontal={10}>
        <Box flexDirection="row" flexWrap="wrap" marginHorizontal={-5}>
          {listProduct.map(({ id, name, price, shortDescription, image, quantity }) => {
            return (
              <ProductItem
                id={id}
                onPress={() => goToDetailProduct(id)}
                key={id.toString()}
                name={name}
                image={image}
                shortDescription={shortDescription}
                price={price}
                quantity={quantity}
              />
            )
          })}
        </Box>
      </Box>
    )
  }

  const getCategories = useCallback(async () => {
    try {
      const { content, statusCode } = await getAllCategory()
      if (statusCode === STATUS.SUCCESS_NUM) {
        if (content) {
          setCategories(content)
          setIdActiveCategory(content[0].id)
        }
      }
    } catch (error) {
      setCategories([])
    }
  }, [])

  useEffect(() => {
    void getCategories()
  }, [getCategories])

  const getListProductByCategoryId = useCallback(async (id: string) => {
    try {
      const { content, statusCode } = await getProductByCategoryId(id)

      if (statusCode === STATUS.SUCCESS_NUM) {
        if (content) {
          setListProduct(content)
        }
      }
    } catch (error) {
      setListProduct([])
    }
    setIsRefresh(false)
  }, [])

  useEffect(() => {
    if (idActiveCategory) {
      void getListProductByCategoryId(idActiveCategory)
    }
  }, [idActiveCategory, getListProductByCategoryId])

  const renderListRestaraurants = () => {
    return <StoreList />
  }

  const onRefreshData = () => {
    setIsRefresh(true)
    void getCategories()
    void getListProductByCategoryId(idActiveCategory)
  }

  return (
    <Box flex={1} backgroundColor="#fff">
      {renderHeader()}
      <ScrollView
        refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={onRefreshData} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {renderBanner()}
        {renderListOfCategories()}
        {renderListProduct()}
        {renderListRestaraurants()}
      </ScrollView>
    </Box>
  )
}

export default Home

const styles = StyleSheet.create({
  category: {
    marginRight: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1.5,
  },
})
