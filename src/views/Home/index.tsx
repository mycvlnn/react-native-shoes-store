import React, { useCallback, useEffect, useState } from 'react'
import { BadgeNotification, Box, Header, Typography } from '~/components'
import { Pressable, ScrollView, StyleSheet } from 'react-native'

import { useAppSelector } from '~/store/hooks'

import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { primaryBold, primaryColor, sizes, STATUS } from '~/constants'
import { BagRegular, LocationSolid, MenuIconLeft } from '~/assets/icons'
import BoxShadow from './components/BoxShadow'
import Banner from './components/Banner'
import { getAllCategory, getAllStore, getProductByCategoryId } from '~/services'
import { ICategory, IProductDetail, IStore } from '~/services/models'
import ProductItem from './components/ProductItem'
import ItemStore from './components/ItemStore'
import { hasCart } from '~/store/cartSlice/selector'

const Home = () => {
  const navigation = useNavigation()
  const isCart = useAppSelector(hasCart)

  const [idActiveCategory, setIdActiveCategory] = useState('')
  const [categories, setCategories] = useState<ICategory[]>([])
  const [listProduct, setListProduct] = useState<IProductDetail[]>([])
  const [listStore, setListStore] = useState<IStore[]>([])
  const { t } = useTranslation()

  const handleClickCategory = (id: string) => {
    setIdActiveCategory(id)
  }

  const renderCustomTitle = () => {
    return (
      <Box justifyContent="center">
        <Typography textAlign="center" marginBottom={8} fontSize={14} color="#888">
          Store location
        </Typography>
        <Box flexDirection="row" alignItems="center">
          <LocationSolid size={12} color={primaryBold} />
          <Typography marginLeft={8}>Rembang, Ind</Typography>
        </Box>
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
          Category
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
      <Box marginTop={30} marginBottom={30}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Box flexDirection="row" paddingHorizontal={sizes.horizontal}>
            {listProduct.map(({ id, name, price, shortDescription, image }) => {
              return (
                <ProductItem
                  onPress={() => goToDetailProduct(id)}
                  key={id.toString()}
                  name={name}
                  image={image}
                  shortDescription={shortDescription}
                  price={price}
                />
              )
            })}
          </Box>
        </ScrollView>
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
  }, [])

  useEffect(() => {
    if (idActiveCategory) {
      void getListProductByCategoryId(idActiveCategory)
    }
  }, [idActiveCategory, getListProductByCategoryId])

  const getListRestaurants = useCallback(async () => {
    try {
      const { statusCode, content } = await getAllStore()
      if (statusCode === STATUS.SUCCESS_NUM) {
        if (content) setListStore(content)
      }
    } catch (error) {
      setListStore([])
    }
  }, [])

  useEffect(() => {
    void getListRestaurants()
  }, [getListRestaurants])

  const renderListRestaraurants = () => {
    return (
      <Box marginHorizontal={sizes.horizontal}>
        <Typography fontSize={20} fontWeight="700" marginBottom={20}>
          Explore more
        </Typography>
        {listStore.map(({ id, name, image, description }) => {
          return <ItemStore key={id} name={name} image={image} description={description} />
        })}
      </Box>
    )
  }

  return (
    <Box flex={1}>
      {renderHeader()}
      <ScrollView
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
