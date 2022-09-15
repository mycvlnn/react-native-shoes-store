import React from 'react'
import { Pressable } from 'react-native'
import { Box, Typography } from '~/components'
import { LocationSearch } from '~/assets/icons'

interface IProps {
  title: string
  onPress: () => void
}

const ItemAutoComplete: React.FC<IProps> = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        alignItems="center"
        paddingVertical={16}
        borderBottomColor="#000"
        borderBottomWidth={0.5}
      >
        <LocationSearch />
        <Typography
          flex={1}
          color="#000"
          marginLeft={20}
          fontSize={18}
          fontWeight="400"
          numberOfLines={1}
        >
          {title}
        </Typography>
      </Box>
    </Pressable>
  )
}

export default ItemAutoComplete
