import { Image, ListRenderItem, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Box } from '~/components'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { defaultColors } from '~/constants'
import { sliderWidth } from '~/views/Home/styles/StylesCarousel'

const DEFAULT_DATA = [
  {
    id: 1,
    image: 'https://shop.cyberlearn.vn/images/adidas-prophere.png',
  },
  {
    id: 2,
    image: 'https://shop.cyberlearn.vn/images/adidas-prophere.png',
  },
]

const SLIDER_FIRST_ITEM = 1

const ListImageDetail = () => {
  const [activeSlide, setActiveSlide] = useState(SLIDER_FIRST_ITEM)

  const renderItem: ListRenderItem<{ id: number; image: string }> = ({ item }) => {
    const { image, id } = item

    return <Image source={{ uri: image }} style={{ height: 400 }} />
  }

  return (
    <Box>
      <Carousel
        data={DEFAULT_DATA}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        hasParallaxImages={true}
        firstItem={SLIDER_FIRST_ITEM}
        slideStyle={{ width: sliderWidth }}
        // containerCustomStyle={{ backgroundColor: 'red' }}
        // contentContainerCustomStyle={styles.sliderContentContainer}
        loop={true}
        autoplay={true}
        autoplayDelay={2000}
        autoplayInterval={3000}
        inactiveSlideScale={1}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={Math.min(DEFAULT_DATA.length, 5)}
        activeDotIndex={activeSlide}
        containerStyle={styles.containterPagination}
        dotColor={defaultColors.gray}
        inactiveDotColor={defaultColors.black}
        inactiveDotOpacity={0.5}
        inactiveDotScale={0.6}
      />
    </Box>
  )
}

export default ListImageDetail

const styles = StyleSheet.create({
  containterPagination: {
    position: 'absolute',
    width: '100%',
    bottom: '10%',
  },
})
