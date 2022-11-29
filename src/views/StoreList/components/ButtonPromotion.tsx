import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Box, Typography } from '~/components'
import { PromotionIcon } from '~/assets/icons'

interface IProps {
  onPress?: () => void
}

const ButtonPromotion: React.FC<IProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.root} onPress={onPress}>
      <LinearGradient useAngle angle={90} colors={['#FF4B1F', '#FFAD5C']}>
        <Box paddingVertical={8} paddingHorizontal={8} flexDirection="row" alignItems="center">
          <PromotionIcon />
          <Typography color="#fff" marginLeft={3}>
            Promos
          </Typography>
        </Box>
      </LinearGradient>
    </Pressable>
  )
}

export default ButtonPromotion

const styles = StyleSheet.create({
  root: {
    borderRadius: 90,
    overflow: 'hidden',
  },
})
