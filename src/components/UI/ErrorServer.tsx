import React from 'react'
import { Pressable } from 'react-native'
import { ErrorServerIcon, PolygonIcon } from '~/assets/icons'
import { defaultColors, sizes } from '~/constants'
import Box from '../Base/Box'
import Typography from '../Base/Typography'
import ButtonOpacity from '../Button/ButtonOpacity'

interface ErrorServerProps {
  onRetry?: () => void
  onGoback?: () => void
}

const ErrorServer: React.FC<ErrorServerProps> = ({ onRetry, onGoback }) => {
  const renderTryLater = () => {
    if (!onGoback) return null

    return (
      <Box position="absolute" top="6%" left={sizes.horizontal}>
        <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
          <PolygonIcon width={14} height={14} />
          <Typography fontSize={18} fontWeight="700" textDecorationLine="underline">
            Go back
          </Typography>
        </Pressable>
      </Box>
    )
  }

  return (
    <Box flex={1}>
      {renderTryLater()}
      <Box flex={1} alignItems="center" justifyContent="center">
        <ErrorServerIcon />
        <Typography paddingTop={4} fontSize={26} fontWeight="800" color={defaultColors.gray}>
          Oops! Something went wrong
        </Typography>
        {onRetry && (
          <Box width="100%" marginTop={30} paddingHorizontal={sizes.horizontal}>
            <ButtonOpacity onPress={onRetry} title="Retry" />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default React.memo(ErrorServer)
