import { Pressable } from 'react-native'
import React from 'react'
import { Box, Typography } from '~/components'
import { Chevronright } from '~/assets/icons'

interface IProps {
  title?: string
  onPress?: () => void
}

const TermItem: React.FC<IProps> = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingVertical={24}
        borderBottomColor="#000"
        borderBottomWidth={1}
      >
        <Typography fontSize={18} fontWeight="500">
          {title}
        </Typography>
        <Chevronright />
      </Box>
    </Pressable>
  )
}

export default TermItem
