import { Image, Pressable } from 'react-native'
import React from 'react'
import { Box, Typography } from '~/components'
import { textColor } from '~/constants'
import { OclockIcon, StarIconOutline } from '~/assets/icons'
import { useNavigation } from '@react-navigation/native'
import { routes } from '~/routes'
import { IShop } from '~/models/Shops'

const StoreItem: React.FC<IShop> = ({
  image,
  name,
  description,
  rating,
  ratingNumber,
  distance,
  openTime,
  id,
}) => {
  const navigation = useNavigation()

  const goToStoreDetail = () => {
    navigation.navigate(routes.StoreDetails, { id })
  }

  const renderOverviewDescription = () => {
    return (
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box flexDirection="row" alignItems="center">
          <Typography fontWeight="600">{distance}km</Typography>
          <Box height={14} width={1} backgroundColor={textColor} marginHorizontal={10} />
          <Box flexDirection="row" alignItems="center">
            <StarIconOutline />
            <Typography marginLeft={4}>
              {rating} ({ratingNumber})
            </Typography>
          </Box>
        </Box>
        <Box flexDirection="row" alignItems="center" justifyContent="flex-end">
          <OclockIcon size={18} />
          <Typography padding={10} color="#000" fontSize={14}>
            {openTime}
          </Typography>
        </Box>
      </Box>
    )
  }

  return (
    <Pressable onPress={goToStoreDetail}>
      <Box marginBottom={30}>
        <Box borderBottomColor="#000" borderBottomWidth={1} paddingBottom={10}>
          <Image source={image} style={{ height: 200, width: '100%', borderRadius: 14 }} />
          <Box marginTop={8}>
            <Typography fontWeight="700" fontSize={20}>
              {name}
            </Typography>
            <Typography marginTop={8} numberOfLines={2}>
              {description}
            </Typography>
          </Box>
        </Box>
        {renderOverviewDescription()}
      </Box>
    </Pressable>
  )
}

export default StoreItem
