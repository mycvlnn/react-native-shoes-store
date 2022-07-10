import React from 'react'
import { Box, Typography } from '~/components'

const Home = () => {
  return (
    <Box flex={1} backgroundColor="blue">
      <Typography fontSize={30}>Hello</Typography>
      <Typography fontSize={30} fontWeight="bold">
        Hello
      </Typography>
      <Typography fontSize={30}>Hello</Typography>
      <Box backgroundColor="red" flexDirection="row" justifyContent="space-between">
        <Typography
          onLayout={(e) => {
            console.log(e)
          }}
        >
          Hello
        </Typography>
        <Typography>Test</Typography>
      </Box>
    </Box>
  )
}

export default Home
