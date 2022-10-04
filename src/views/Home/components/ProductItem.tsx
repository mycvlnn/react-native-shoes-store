import { Alert, Image, Pressable } from 'react-native'
import React from 'react'
import { Box, Typography } from '~/components'
import { primaryBold, sizes, STATUS } from '~/constants'
import { FavoriteOutline, StarIcon } from '~/assets/icons'
import { toggleFavoriteProductItem } from '~/services'

interface IProps {
  id: number
  image: string
  name: string
  price: number
  quantity: number
  shortDescription: string
  onPress: () => void
}

const ProductItem: React.FC<IProps> = ({ id, image, name, price, quantity, onPress }) => {
  const handleFavorite = async () => {
    const { statusCode } = await toggleFavoriteProductItem(id, true)
    if (statusCode === STATUS.SUCCESS_NUM) Alert.alert('Favorited')
    else Alert.alert('Error. Try again')
  }

  const renderImage = () => {
    return (
      <Box
        borderRadius={20}
        backgroundColor="#f3f3f3"
        shadowColor="#ccc"
        shadowOffset={{ width: 2, height: 2 }}
        shadowOpacity={0.2}
        shadowRadius={1}
        alignItems="center"
        width="100%"
        padding={sizes.horizontal}
      >
        <Box zIndex={2} position="absolute" right={14} top={16}>
          <Pressable
            hitSlop={4}
            onPress={(e) => {
              e.stopPropagation()
              void handleFavorite()
            }}
          >
            <FavoriteOutline size={20} fillColor="red" color="red" />
          </Pressable>
        </Box>
        <Image source={{ uri: image }} style={{ width: '100%', aspectRatio: 1 }} />
      </Box>
    )
  }

  const renderDescription = () => {
    return (
      <Box marginVertical={sizes.horizontal}>
        <Typography fontSize={18} fontWeight="700" marginBottom={8} numberOfLines={1}>
          {name}
        </Typography>
        <Box flexDirection="row" alignItems="center">
          <Box paddingVertical={4} flexDirection="row" alignItems="center">
            <StarIcon color={primaryBold} />
            <Typography fontSize={14} marginLeft={8}>
              {(Math.random() * 5).toFixed(2)}
            </Typography>
          </Box>
          <Box width={1} height={10} backgroundColor="#333" marginHorizontal={8} />
          <Typography
            backgroundColor="#f3f3f3"
            paddingHorizontal={10}
            paddingVertical={5}
            borderRadius={8}
            overflow="hidden"
            fontWeight="400"
            fontSize={14}
          >
            x {quantity}
          </Typography>
        </Box>

        <Typography marginTop={4} fontSize={18} fontWeight="600">
          ${price}
        </Typography>
      </Box>
    )
  }

  return (
    <Pressable onPress={onPress} style={{ width: '50%', paddingHorizontal: 5 }}>
      <Box width="100%" marginBottom={10}>
        {renderImage()}
        {renderDescription()}
      </Box>
    </Pressable>
  )
}

export default ProductItem
