import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  size?: number
  color?: string
}

const MinusIcon: React.FC<Props> = ({ size = 18, color = 'currentColor' }) => {
  return (
    <Svg viewBox="0 0 448 512" width={size} height={size} fill={color}>
      <Path d="M400 288H48c-17.69 0-32-14.32-32-32.01S30.31 224 48 224h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
    </Svg>
  )
}

export default MinusIcon
