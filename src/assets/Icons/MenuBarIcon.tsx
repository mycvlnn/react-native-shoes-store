import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { tabBarTintColor } from '~/constants'

interface ISize {
  size?: number
  background?: string
  color?: string
  strokeWidth?: number
}

/** icon menu 3 gach ngang */
const MenuBarIcon: (props: ISize) => React.ReactElement = ({
  size = 24,
  background = 'none',
  color = tabBarTintColor,
  strokeWidth = 2,
}) => {
  return (
    <Svg width={`${size}`} height={`${size}`} viewBox="0 0 24 19" fill={`${background}`}>
      <Path
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        d="M1 1h21.565M1 9.208h21.565M1 17.415h21.565"
      />
    </Svg>
  )
}

export default MenuBarIcon
