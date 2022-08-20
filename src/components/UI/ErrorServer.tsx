import React from 'react'
import { ErrorServerIcon } from '~/assets/icons'
import { defaultColors, sizes } from '~/constants'
import Box from '../Base/Box'
import Typography from '../Base/Typography'
import ButtonOpacity from '../Button/ButtonOpacity'

interface ErrorServerProps {
  onRetry?: () => void
}

const ErrorServer: React.FC<ErrorServerProps> = ({ onRetry = () => {} }) => {
  return (
    <Box flex={1} justifyContent="space-between">
      <Box flex={1} alignItems="center" justifyContent="center">
        <ErrorServerIcon />
        <Typography paddingTop={4} fontSize={26} fontWeight="800" color={defaultColors.gray}>
          Oops! Something went wrong
        </Typography>
        <Box width="100%" position="absolute" bottom="10%" paddingHorizontal={sizes.horizontal}>
          <ButtonOpacity onPress={onRetry} title="Retry" />
        </Box>
      </Box>
    </Box>
  )
}

export default React.memo(ErrorServer)
