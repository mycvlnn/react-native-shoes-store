import React from 'react'
import { Box, Typography } from '~/components'
import { sizes } from '~/constants'

interface IProps {
  title: string
  description: string
}

const EmptyData: React.FC<IProps> = ({ title, description }) => {
  return (
    <Box
      flex={1}
      backgroundColor="#fff"
      justifyContent="flex-end"
      paddingHorizontal={sizes.horizontal}
    >
      <Box marginBottom="40%">
        <Typography fontSize={24} fontWeight="600">
          {title}
        </Typography>
        <Typography fontSize={18} fontWeight="400" marginTop={10}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default EmptyData
