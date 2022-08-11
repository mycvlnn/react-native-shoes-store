import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  color?: string
  size?: number
}

const MenuIconLeft: React.FC<Props> = ({ color = '#000', size = 18 }) => {
  return (
    <Svg width={size} height={size} fill={color}>
      <Path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z" />
    </Svg>
  )
}

export default MenuIconLeft
