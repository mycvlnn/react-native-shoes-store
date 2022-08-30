import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import { sizes } from '~/constants'
import { ArrowTopIcon } from '~/assets/icons'

interface IProps {
  onPress?: () => void
  styleAnimation?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>
}

const ScrollToTop: React.FC<IProps> = ({ onPress, styleAnimation }) => {
  return (
    <Animated.View style={[styles.box, styleAnimation]}>
      <TouchableOpacity onPress={onPress} hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}>
        <ArrowTopIcon />
      </TouchableOpacity>
    </Animated.View>
  )
}

export default ScrollToTop

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    zIndex: 10,
    bottom: '6%',
    right: sizes.horizontal,
    paddingVertical: 12,
    paddingHorizontal: 11,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 100,
    elevation: 5,
    backgroundColor: 'white',
  },
})
