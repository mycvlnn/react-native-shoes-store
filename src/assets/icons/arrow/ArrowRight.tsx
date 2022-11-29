import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  size?: number
  color?: string
}

const ArrowRight: React.FC<Props> = ({ size = 16, color = 'currentColor' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M1 8h14M8 1l7 7-7 7"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowRight
