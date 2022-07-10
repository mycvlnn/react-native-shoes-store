import React from 'react'
import { Text, TextProps, TextStyle } from 'react-native'

// Dùng thay thế cho component Text của react-native

export const listFontFamily = {
  robotoBlack: 'Roboto-Black',
  robotoBold: 'Roboto-Bold',
  robotoLight: 'Roboto-Light',
  robotoMedium: 'Roboto-Medium',
  robotoRegular: 'Roboto-Regular',
  robotoThin: 'Roboto-Thin',
}

interface Props extends TextStyle, TextProps {
  children: string
}

const Typography = React.forwardRef<Text, Props>((props, ref) => {
  const { children, fontWeight, ...restProps } = props

  /**
   * Hàm xử lý lấy ra font-family phù hợp
   * @returns font-famlily dựa vào giá trị font-weight được truyền vào
   */
  const getFontFamilyByFontWeight = () => {
    const { robotoBlack, robotoBold, robotoLight, robotoMedium, robotoRegular, robotoThin } =
      listFontFamily
    switch (fontWeight) {
      case '100':
        return robotoThin
      case '300':
        return robotoLight
      case '400':
      case 'normal':
        return robotoRegular
      case '500':
        return robotoMedium
      case '700':
        return robotoBold
      case '900':
      case 'bold':
        return robotoBlack
      default:
        return robotoRegular
    }
  }

  return (
    <Text
      ref={ref}
      style={{
        ...restProps,
        fontFamily: getFontFamilyByFontWeight(),
      }}
      {...restProps}
    >
      {children}
    </Text>
  )
})

export default Typography
