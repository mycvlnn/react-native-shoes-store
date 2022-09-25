import { Pressable } from 'react-native'
import React from 'react'
import { BadgeNotification, Box, Typography } from '~/components'

interface IProps {
  icon?: React.ReactNode
  label?: string
  isActive?: boolean
  onPress?: () => void
  lastIndex?: boolean
}

const ItemMenu: React.FC<IProps> = ({ icon, label, isActive, onPress = () => {}, lastIndex }) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginBottom={!lastIndex ? 24 : 0}
      >
        <Box flexDirection="row" alignItems="center">
          <Box minWidth={30}>{icon}</Box>
          <Typography fontSize={18} fontWeight="600">
            {label}
          </Typography>
        </Box>
        <BadgeNotification isShow={isActive} position="relative" />
      </Box>
    </Pressable>
  )
}

export default ItemMenu
