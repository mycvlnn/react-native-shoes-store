import { Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Box, Typography } from '~/components'
import { height, width } from '~/constants'

export interface ISlide {
  image: ImageSourcePropType
  title: string
}

const SlideItem: React.FC<ISlide> = ({ image, title }) => {
  const renderBoxDescription = () => {
    return (
      <Box position="absolute" backgroundColor="#fff" bottom={0} width="100%" padding={30}>
        <Typography
          color="#000"
          textAlign="center"
          fontWeight="700"
          fontSize={30}
          marginBottom="40%"
        >
          {title}
        </Typography>
      </Box>
    )
  }

  return (
    <Box flex={1}>
      <Image source={image} style={{ width, height }} />
      {renderBoxDescription()}
    </Box>
  )
}

export default SlideItem
