import { Image, ListRenderItem, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Box } from '~/components'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { sliderWidth } from '~/views/Home/styles/StylesCarousel'
import { defaultColors, textColor } from '~/constants'

const DATA_IMAGES = [
  'https://www.bostonmagazine.com/wp-content/uploads/sites/2/2021/09/style_store-1.jpg',
  'https://www.gannett-cdn.com/presto/2021/12/16/PSAT/965f9a4f-7367-41a4-9aff-0a6651beb3ff-IMG_0763.jpg?width=1200&disable=upscale&format=pjpg&auto=webp',
  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/679b9121672815.563062a9a20ab.JPG',
]

const ListImageStore = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const renderItem: ListRenderItem<string> = ({ item }) => {
    return <Image source={{ uri: item }} style={styles.image} />
  }

  return (
    <Box marginTop={20}>
      <Carousel
        data={DATA_IMAGES}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        activeSlideAlignment="start"
        itemWidth={330}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.7}
        inactiveSlideShift={15}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={DATA_IMAGES.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotContainerStyle={{ marginHorizontal: 2 }}
        dotColor={textColor}
        inactiveDotColor={defaultColors.black}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.9}
      />
    </Box>
  )
}

export default ListImageStore

const styles = StyleSheet.create({
  image: {
    width: 330,
    aspectRatio: 1,
    borderRadius: 16,
  },
  paginationContainer: {
    justifyContent: 'flex-end',
    paddingVertical: 20,
  },
})
