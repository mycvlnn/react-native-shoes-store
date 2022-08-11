import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ArrowBackIcon } from '~/assets/icons'
import { Box, Typography } from '~/components'
import { sizes, textColor } from '~/constants'

interface IProps {
  title?: string
  color?: string
  backgroundColor?: string
  iconBackColor?: string
  zIndex?: number
  goBack?: () => void
  customBack?: () => React.ReactNode
  customRight?: () => React.ReactNode
  customTitle?: () => React.ReactNode
}

const Header: React.FC<IProps> = ({
  title,
  color = 'white',
  backgroundColor = textColor,
  zIndex = 1,
  goBack,
  customBack,
  customRight,
  customTitle,
}) => {
  const insets = useSafeAreaInsets()

  const renderBackIcon = () => {
    if (!goBack) return <Box width={10} height={10} />

    return (
      <Pressable onPress={goBack}>
        {customBack ? customBack() : <ArrowBackIcon color={color} />}
      </Pressable>
    )
  }

  const renderTextTitle = () => {
    if (customTitle) return customTitle()
    if (title)
      return (
        <Box maxWidth="80%">
          <Typography numberOfLines={1} fontSize={22} fontWeight="700" color={color}>
            {title}
          </Typography>
        </Box>
      )
    return null
  }

  const renderCustomRight = () => {
    if (!customRight) return <Box width={10} height={10} />
    return customRight()
  }

  return (
    <Box
      paddingHorizontal={sizes.horizontal}
      paddingTop={insets.top}
      paddingBottom={insets.top / 2}
      zIndex={zIndex}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor={backgroundColor}
    >
      {renderBackIcon()}
      {renderTextTitle()}
      {renderCustomRight()}
    </Box>
  )
}

export default Header
