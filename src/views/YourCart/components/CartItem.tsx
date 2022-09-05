import { Animated, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Box, Typography } from '~/components'
import { MinusIcon, PlusIcon, TrashIcon } from '~/assets/icons'
import { defaultColors, textColor } from '~/constants'
import { ICartItem } from '~/models'
import { MAX_QUANTITY, MIN_QUANTITY } from '~/views/ProductDetail'
import { useAppDispatch } from '~/store/hooks'
import { controlQuantity, removeItem } from '~/store/cartSlice'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const CartItem: React.FC<ICartItem> = ({
  primaryKey,
  name,
  image,
  shortDescription,
  price,
  quantity,
  size,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState<number>(quantity)
  const dispatch = useAppDispatch()
  const swipeableRef = useRef<Swipeable>(null)

  const handleControlQuantity = (controlNumber: number) => {
    if (currentQuantity === MAX_QUANTITY && controlNumber === 1) return

    if (currentQuantity === MIN_QUANTITY && controlNumber === -1) {
      swipeableRef.current?.openRight()
      return
    }

    setCurrentQuantity((prevQuantity) => prevQuantity + controlNumber)
    dispatch(controlQuantity({ controlNumber, primaryKey }))
  }

  const deleteItemCart = () => {
    dispatch(removeItem({ primaryKey }))
  }

  return (
    <GestureHandlerRootView>
      <Swipeable
        ref={swipeableRef}
        friction={2}
        renderRightActions={(progrees) => {
          const trans = progrees.interpolate({
            inputRange: [0, 1],
            outputRange: [70, -10],
            extrapolate: 'clamp',
          })

          return (
            <TouchableOpacity onPress={deleteItemCart}>
              <Animated.View style={[styles.rightActions, { transform: [{ translateX: trans }] }]}>
                <TrashIcon />
              </Animated.View>
            </TouchableOpacity>
          )
        }}
      >
        <Box
          flexDirection="row"
          backgroundColor="white"
          borderRadius={10}
          overflow="hidden"
          alignItems="center"
          marginBottom={20}
          height={140}
        >
          <Image source={{ uri: image }} style={styles.image} />
          <Box flex={1} padding={4}>
            <Typography fontSize={18} fontWeight="700">
              {name}
            </Typography>
            <Typography numberOfLines={2} width="100%" fontSize={14} fontWeight="500" marginTop={6}>
              {shortDescription}
            </Typography>
            <Box flexDirection="row" marginTop={10} justifyContent="space-between">
              <Typography fontSize={14} fontWeight="400">
                Size: {size}
              </Typography>
              <Typography fontWeight="700" fontSize={14}>
                ${price}
              </Typography>
            </Box>
          </Box>
          <Box alignItems="center">
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.minus}
              onPress={() => handleControlQuantity(-1)}
            >
              <MinusIcon color="black" size={16} />
            </TouchableOpacity>
            <Typography fontSize={14} fontWeight="bold">
              {currentQuantity}
            </Typography>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.plus}
              onPress={() => handleControlQuantity(1)}
            >
              <PlusIcon color="white" size={16} />
            </TouchableOpacity>
          </Box>
        </Box>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

export default CartItem

const styles = StyleSheet.create({
  image: { width: 100, height: 100, borderRadius: 10, margin: 10 },
  minus: {
    padding: 4,
    backgroundColor: defaultColors.background,
    margin: 10,
    borderRadius: 4,
  },
  plus: { padding: 4, backgroundColor: textColor, margin: 10, borderRadius: 4 },

  rightActions: {
    height: 140,
    width: 70,
    backgroundColor: '#000',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',

    justifyContent: 'center',
  },
})
