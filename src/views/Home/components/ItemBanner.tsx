import { Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Box, Typography } from '~/components'

interface IProps {
  image: string
  name: string
  price: number
  onPress: () => void
  size: string
}

const ItemBanner: React.FC<IProps> = ({ name, image, onPress, price, size }) => {
  const renderSize = () => {
    const arrSize = JSON.parse(size) as number[]

    return arrSize.slice(0, 4).map((item) => {
      return (
        <Box
          key={item}
          borderRadius={100}
          padding={10}
          marginHorizontal={4}
          backgroundColor="black"
        >
          <Typography color="white">{item}</Typography>
        </Box>
      )
    })
  }

  return (
    <Pressable style={styles.boxItemImage} onPress={onPress}>
      <Image source={{ uri: image }} style={{ height: 160, width: 200 }} />
      <Box flexDirection="row" justifyContent="space-between" width={'100%'} marginBottom={10}>
        <Typography fontSize={20} fontWeight="700" width="70%">
          {name}
        </Typography>
        <Typography fontWeight="700" fontSize={20}>
          ${price}
        </Typography>
      </Box>
      <Box flexDirection="row">{renderSize()}</Box>
    </Pressable>
  )
}

export default ItemBanner

const styles = StyleSheet.create({
  boxItemImage: {
    padding: 20,
    height: 300,
    borderRadius: 16,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
