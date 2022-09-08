import { Pressable } from 'react-native'
import React from 'react'
import { Box, Typography } from '~/components'
import { primaryBold } from '~/constants'
import { TickIcon } from '~/assets/icons'

interface IProps {
  flagIcon: React.ReactNode
  active?: boolean
  onPress?: () => void
  index: number
  name: string
}

const ItemLanguage: React.FC<IProps> = ({ flagIcon, active, onPress = () => {}, index, name }) => {
  const renderTickIcon = () => {
    if (!active) return null

    return (
      <Box position="absolute" left="10%" top="10%">
        <TickIcon />
      </Box>
    )
  }

  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        padding={30}
        backgroundColor="#fff"
        borderColor={active ? primaryBold : '#000'}
        borderWidth={1}
        borderRadius={30}
        marginBottom={15}
        marginRight={index % 2 === 0 ? 10 : 0}
        marginLeft={index % 2 !== 0 ? 10 : 0}
      >
        {renderTickIcon()}
        {flagIcon}
        <Typography marginTop={24} fontSize={18} fontWeight="600">
          {name}
        </Typography>
      </Box>
    </Pressable>
  )
}

export default ItemLanguage
