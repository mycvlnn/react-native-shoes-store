import React from 'react'
import { Box } from '~/components'

interface Props {
  children: React.ReactNode
}

const BoxShadow: React.FC<Props> = ({ children }) => {
  return (
    <Box
      backgroundColor="#fff"
      padding={10}
      borderRadius={1000}
      shadowColor="#ccc"
      shadowOffset={{ width: 2, height: 4 }}
      shadowOpacity={0.2}
      shadowRadius={4}
    >
      {children}
    </Box>
  )
}

export default BoxShadow
