import { Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { IShoesItem } from '~/models/Shops'
import { Box, Typography } from '~/components'
import { formatWithCurrency } from '~/utils'
import { textColor } from '~/constants'

interface IProps extends IShoesItem {
  onPress?: () => void
  isPopular?: boolean
}

const ShoesItem: React.FC<IProps> = ({
  image,
  name,
  description,
  price,
  isPopular,
  active,
  onPress = () => {},
}) => {
  return (
    <Pressable onPress={active ? undefined : onPress}>
      <Box
        opacity={!active ? 0.2 : 1}
        flexDirection="row"
        alignItems="flex-start"
        marginBottom={18}
      >
        <Image source={image} style={styles.image} />
        <Box flex={1}>
          <Typography fontSize={18} fontWeight="600" numberOfLines={1}>
            {name}
          </Typography>
          <Typography fontSize={14} fontWeight="400" numberOfLines={2}>
            {description}
          </Typography>
          <Typography marginTop={10} fontWeight="600">
            {formatWithCurrency({ amount: price })}
          </Typography>
          {isPopular && (
            <Typography
              marginTop={10}
              marginLeft="auto"
              backgroundColor={textColor}
              color="white"
              paddingVertical={4}
              paddingHorizontal={12}
              borderRadius={10}
              textAlign="center"
              overflow="hidden"
              fontSize={12}
            >
              Popular
            </Typography>
          )}
        </Box>
      </Box>
      {!active && (
        <Typography
          position="absolute"
          right={0}
          bottom={10}
          fontSize={18}
          fontWeight="600"
          zIndex={2}
        >
          SOLD OUT
        </Typography>
      )}
    </Pressable>
  )
}

export default ShoesItem

const styles = StyleSheet.create({
  image: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 15,
    marginRight: 10,
  },
})
