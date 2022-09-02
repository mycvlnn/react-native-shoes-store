import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Box, Typography } from '~/components'
import { FavoriteOutline, StarIcon } from '~/assets/icons'
import { primaryBold, sizes } from '~/constants'

interface IProps {
  id: number | string
  image: string
  name: string
  onUnFavorite: () => void
}

const FavoriteItem: React.FC<IProps> = ({ id, name, image, onUnFavorite }) => {
  const navigation = useNavigation()

  const goToDetailFavorite = () => {
    navigation.navigate('ProductDetail', { id })
  }

  return (
    <Pressable onPress={goToDetailFavorite}>
      <Box
        marginHorizontal={sizes.horizontal}
        marginBottom={20}
        flexDirection="row"
        backgroundColor="white"
        borderRadius={16}
        borderBottomRightRadius={50}
        alignItems="center"
        height={180}
        shadowColor="rgba(0,0,0,0.6)"
        shadowOffset={{ width: 0, height: 4 }}
        shadowOpacity={0.2}
        shadowRadius={4}
        elevation={3}
        paddingTop={20}
        paddingRight={20}
        paddingBottom={20}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <Box flex={1} paddingLeft={20}>
          <Typography fontSize={20} fontWeight="700">
            {name}
          </Typography>
          <Typography
            color="#969fb0"
            numberOfLines={2}
            width="100%"
            fontSize={15}
            fontWeight="500"
            marginTop={6}
          >
            Giày này siêu đẹp, siêu hót, giá siêu khuyến mãi!
          </Typography>
          <Box flexDirection="row" marginTop={10} justifyContent="flex-start">
            <StarIcon color={primaryBold} />
            <StarIcon color={primaryBold} />
            <StarIcon color={primaryBold} />
            <StarIcon color={primaryBold} />
          </Box>
        </Box>
        <Box position="absolute" right={20} top={20}>
          <Pressable onPress={onUnFavorite}>
            <FavoriteOutline size={18} fillColor="red" color="red" />
          </Pressable>
        </Box>
      </Box>
    </Pressable>
  )
}

export default FavoriteItem

const styles = StyleSheet.create({
  image: { width: 130, height: 130, borderTopRightRadius: 20, borderBottomRightRadius: 20 },
})
