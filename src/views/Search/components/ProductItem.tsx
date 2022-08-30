import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { IProductDetail } from '~/services/models'
import { Box, Typography } from '~/components'

const ProductItem: React.FC<IProductDetail> = ({
  name,
  image,
  price,
  description,
  id,
  quantity,
}) => {
  const navigation = useNavigation()

  const goToDetailProduct = () => {
    navigation.navigate('ProductDetail', { id })
  }

  return (
    <Pressable onPress={goToDetailProduct}>
      <Box
        flexDirection="row"
        backgroundColor="white"
        borderRadius={10}
        overflow="hidden"
        alignItems="flex-start"
        marginBottom={20}
        height={140}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <Box flex={1} marginLeft={15}>
          <Typography fontSize={18} fontWeight="700">
            {name}
          </Typography>
          <Typography numberOfLines={2} width="100%" fontSize={14} fontWeight="300" marginTop={6}>
            {description}
          </Typography>
          <Box flexDirection="row" marginTop={10} justifyContent="space-between">
            <Typography fontWeight="700" fontSize={14}>
              ${price}
            </Typography>
            <Typography fontWeight="700" fontSize={14}>
              x{quantity}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
})
