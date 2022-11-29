import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: number
  height?: number
  color?: string
  strokeWidth?: number
}

const ArrowBackIcon: React.FC<Props> = ({
  width = 20,
  height = 18,
  color = 'currentColor',
  strokeWidth = 3,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 18" fill="none">
      <Path
        d="M9 2L2 9L9 16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9H18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowBackIcon
