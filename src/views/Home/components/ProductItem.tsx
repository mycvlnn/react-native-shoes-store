import { Image, Pressable } from 'react-native'
import React from 'react'
import { Box, Typography } from '~/components'
import { defaultColors } from '~/constants'

interface IProps {
  image: string
  name: string
  price: number
  shortDescription: string
  onPress: () => void
}

const ProductItem: React.FC<IProps> = ({ image, name, shortDescription, price, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        width={250}
        height={250}
        paddingHorizontal={12}
        paddingVertical={12}
        borderRadius={30}
        marginRight={16}
        backgroundColor="#fff"
        padding={10}
        shadowColor="#ccc"
        shadowOffset={{ width: 2, height: 4 }}
        shadowOpacity={0.2}
        shadowRadius={4}
      >
        <Image source={{ uri: image }} style={{ width: '100%', height: 150 }} />
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
          <Box width="80%">
            <Typography fontSize={18} fontWeight="700" marginBottom={8}>
              {name}
            </Typography>
            <Typography color={defaultColors.gray} numberOfLines={1}>
              {shortDescription}
            </Typography>
          </Box>
          <Typography fontSize={20} fontWeight="700">
            ${price}
          </Typography>
        </Box>
      </Box>
    </Pressable>
  )
}

export default ProductItem
