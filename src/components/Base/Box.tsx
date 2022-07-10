import { View, ViewProps, ViewStyle } from 'react-native'
import React from 'react'

interface Props extends ViewStyle, ViewProps {}

const Box = React.forwardRef<View, Props>((props, ref) => {
  const { children, ...restProps } = props

  return (
    <View
      ref={ref}
      style={{
        ...restProps,
      }}
      {...restProps}
    >
      {children}
    </View>
  )
})

export default Box
