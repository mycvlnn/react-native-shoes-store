import { Image, ListRenderItem, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Box } from '~/components'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { defaultColors } from '~/constants'
import { sliderWidth } from '~/views/Home/styles/StylesCarousel'
import { IBaseItemProduct } from '~/services/models'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProps } from '~/navigations/types'

const SLIDER_FIRST_ITEM = 1

interface IProps {
  data: IBaseItemProduct[]
}

const ListImageDetail: React.FC<IProps> = ({ data = [] }) => {
  const [activeSlide, setActiveSlide] = useState(SLIDER_FIRST_ITEM)
  const navigation = useNavigation<RootStackNavigationProps<'ProductDetail'>>()

  const renderItem: ListRenderItem<IBaseItemProduct> = ({ item }) => {
    const { image, id } = item

    return (
      <Pressable onPress={() => navigation.push('ProductDetail', { id })}>
        <Image source={{ uri: image }} style={{ height: 400 }} />
      </Pressable>
    )
  }

  return (
    <Box>
      <Carousel
        data={data}
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
        dotsLength={Math.min(data.length, 5)}
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
    bottom: '16%',
  },
})
