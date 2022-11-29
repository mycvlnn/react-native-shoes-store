import React from 'react'
import Svg, { Circle } from 'react-native-svg'
import { textColor } from '~/constants'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const ThreeDots: React.FC<IProps> = ({ width = 20, height = 6, color = textColor }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 6" fill="none">
      <Circle cx={2.14286} cy={3.00003} r={2.14286} fill={color} />
      <Circle cx={9.99997} cy={3.00003} r={2.14286} fill={color} />
      <Circle cx={17.8572} cy={3.00003} r={2.14286} fill={color} />
    </Svg>
  )
}

export default ThreeDots
