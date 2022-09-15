import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Box, Typography } from '~/components'
import LinearGradient from 'react-native-linear-gradient'
import {
  ActiveGradientIcon,
  ArrowLocation,
  BagSolidIcon,
  ClockPassIcon,
  HomeSolidIcon,
  PenIcon,
  SmileSolidIcon,
} from '~/assets/icons'
import IconAddress from './IconAddress'

interface IProps {
  onPress?: () => void
  onEdit?: () => void
  title?: string
  description?: string
  isActive?: boolean
  icon?: 'home' | 'work' | 'friends' | 'clock' | 'currentLocation'
}

const ItemAddress: React.FC<IProps> = ({
  onPress = () => {},
  title = '',
  description = '',
  isActive = false,
  icon,
  onEdit,
}) => {
  const renderBtnEdit = () => {
    if (!onEdit) return null
    return (
      <Pressable
        onPress={(e) => {
          e.stopPropagation()
          onEdit()
        }}
      >
        <PenIcon />
      </Pressable>
    )
  }

  const renderActive = () => {
    if (!isActive) return null

    return (
      <Box position="absolute" left="4%" top="8%">
        <ActiveGradientIcon />
      </Box>
    )
  }

  const borderColor = isActive ? ['rgba(255, 143, 31, 1)', 'rgba(64, 172, 221, 1)'] : ['#000']

  return (
    <Pressable onPress={onPress}>
      <Box borderRadius={20} overflow="hidden">
        <LinearGradient
          useAngle
          angle={120}
          style={{ padding: isActive ? 2 : 1 }}
          colors={borderColor}
        >
          <Box
            alignItems="center"
            flexDirection="row"
            backgroundColor="#fff"
            borderRadius={20}
            padding={20}
          >
            <IconAddress typeIcon={icon} />
            <Box flex={1} marginHorizontal={20}>
              <Typography fontSize={18} fontWeight="600">
                {title}
              </Typography>

              <Typography fontSize={14} fontWeight="400" marginTop={4} numberOfLines={2}>
                {description}
              </Typography>
            </Box>
            {renderBtnEdit()}
          </Box>
          {renderActive()}
        </LinearGradient>
      </Box>
    </Pressable>
  )
}

export default ItemAddress

const styles = StyleSheet.create({})
