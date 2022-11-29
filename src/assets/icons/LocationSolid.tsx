import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  color?: string
  size?: number
}

const LocationSolid: React.FC<Props> = ({ color = '#000', size = 18 }) => {
  return (
    <Svg viewBox="0 0 384 512" width={size} height={size} fill={color}>
      <Path d="M168.3 499.2C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192 0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0zM192 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z" />
    </Svg>
  )
}

export default LocationSolid
