import React from 'react'
import { Box, Typography } from '~/components'
import Lottie from 'lottie-react-native'
import { SplashFile } from '~/assets/img'

interface IProps {
  onFinishSplash: () => void
}

const Splash: React.FC<IProps> = ({ onFinishSplash }) => {
  return (
    <Box flex={1} backgroundColor="#000" justifyContent="center" alignItems="center">
      <Lottie source={SplashFile} autoPlay loop={false} onAnimationFinish={onFinishSplash} />

      <Typography color="#FFE805" marginTop="60%" fontWeight="400" fontSize={30}>
        Sneaker 1999
      </Typography>
    </Box>
  )
}

export default Splash
