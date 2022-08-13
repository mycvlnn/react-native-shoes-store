import { Image } from 'react-native'
import React from 'react'
import { Box, Typography } from '~/components'
import { primaryBold } from '~/constants'

interface IProps {
  image: string
  name: string
  description: string
}

const ItemStore: React.FC<IProps> = ({ image, name, description }) => {
  return (
    <Box borderBottomColor="#000" borderBottomWidth={1} paddingBottom={20} marginBottom={30}>
      <Image source={{ uri: image }} style={{ height: 200, borderRadius: 20 }} />
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box width="70%">
          <Typography marginTop={18} fontWeight="700" fontSize={18}>
            {name}
          </Typography>
          <Typography marginTop={8} numberOfLines={2}>
            {description}
          </Typography>
        </Box>
        <Typography
          padding={10}
          backgroundColor={primaryBold}
          color="#fff"
          borderRadius={16}
          overflow="hidden"
        >
          15-20 min
        </Typography>
      </Box>
    </Box>
  )
}

export default ItemStore
