import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'
import { Box, ButtonOpacity, Typography } from '~/components'
import { fallbackImage, pinkBeautiful, sizes } from '~/constants'
import { IOrderDetail } from '~/services/models'
import { formatWithCurrency } from '~/utils'

interface IProps extends IOrderDetail {
  type: 'history' | 'ongoing'
  onPress?: () => void
}

const ItemOrderHistory: React.FC<IProps> = ({
  onPress = () => {},
  image = fallbackImage,
  shortDescription = '',
  name = '',
  price = 0,
  quantity = 0,
  type = 'ongoing',
}) => {
  const isOngoing = type === 'ongoing'

  return (
    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        paddingVertical={sizes.horizontal}
        borderBottomColor="#F1F5F8"
        borderBottomWidth={1}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <Box flex={1} marginLeft={15}>
          <Typography fontWeight="600" fontSize={20} numberOfLines={2}>
            {name}
          </Typography>
          <Typography fontWeight="300" fontSize={16} numberOfLines={2}>
            {shortDescription}
          </Typography>
          <Typography color={pinkBeautiful} fontWeight="400" fontSize={16} marginTop={10}>
            {formatWithCurrency({ amount: price })}
          </Typography>
          <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Box marginRight={4}>
              <Typography fontSize={16} fontWeight="600">
                {quantity} item(s)
              </Typography>
            </Box>
            <ButtonOpacity
              backgroundColor={isOngoing ? '#000' : '#E4EBF1'}
              textColor={isOngoing ? '#fff' : '#000'}
              title={isOngoing ? 'Details' : 'Reorder'}
              fontSize={15}
              customStyleButton={styles.btn}
              onPress={onPress}
            />
          </Box>
        </Box>
      </Box>
    </Pressable>
  )
}

export default ItemOrderHistory

const styles = StyleSheet.create({
  image: { width: 100, height: 100, borderRadius: 15 },
  btn: { paddingVertical: 10, paddingHorizontal: 20 },
})
