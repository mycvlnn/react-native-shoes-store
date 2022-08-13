import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { ListRenderItem, StyleSheet } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import { Box } from '~/components'
import { defaultColors, STATUS } from '~/constants'
import { IBanner } from '~/models'
import { getListBanner } from '~/services'
import { itemWidth, sliderWidth } from '../styles/StylesCarousel'
import ItemBanner from './ItemBanner'

const DEFAULT_DATA = [
  {
    id: 1,
    name: 'Adidas Prophere',
    alias: 'adidas-prophere',
    price: 350.0,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: '[36,37,38,39,40,41,42]',
    shortDescription: 'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 995,
    deleted: false,
    categories:
      '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
    relatedProducts: '[2,3,5]',
    feature: true,
    image: 'https://shop.cyberlearn.vn/images/adidas-prophere.png',
  },
]

const SLIDER_FIRST_ITEM = 1

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(SLIDER_FIRST_ITEM)
  const [data, setData] = useState<IBanner[]>(DEFAULT_DATA)
  const navigation = useNavigation()

  const getBanner = useCallback(async () => {
    try {
      const { statusCode, content } = await getListBanner()

      if (statusCode === STATUS.SUCCESS_NUM) {
        if (content && content.length > 0) {
          setData(content)
        }
      }
    } catch (error) {
      setData([])
    }
  }, [])

  useEffect(() => {
    void getBanner()
  }, [getBanner])

  const handleClickBanner = (id: number) => {
    navigation.navigate('ProductDetail', { id })
  }

  const renderItem: ListRenderItem<IBanner> = ({ item }) => {
    const { image, name, id, price, size } = item

    return (
      <ItemBanner
        size={size}
        image={image}
        name={name}
        onPress={() => handleClickBanner(id)}
        price={price}
      />
    )
  }

  if (data.length === 0) return null

  return (
    <Box>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages={true}
        firstItem={SLIDER_FIRST_ITEM}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        inactiveSlideShift={20}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        loop={true}
        loopClonesPerSide={2}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={Math.min(data.length, 5)}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        dotColor={defaultColors.gray}
        inactiveDotColor={defaultColors.black}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </Box>
  )
}

export default Banner

const styles = StyleSheet.create({
  slider: {
    marginTop: 15,
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 20, // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
})
