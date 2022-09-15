import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Box, Typography } from '~/components'
import { LocationSearch } from '~/assets/icons'

interface IProps {
  title: string
  onPress: () => void
}

const ItemLocationSearch: React.FC<IProps> = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        alignItems="center"
        paddingVertical={20}
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
          numberOfLines={2}
        >
          {title}
        </Typography>
      </Box>
    </Pressable>
  )
}

export default ItemLocationSearch

const styles = StyleSheet.create({})
