import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { tabBarTintColor } from '~/constants'

interface Props {
  size?: number
  color?: string
  strokeWidth?: number
}

const FavoriteOutline: React.FC<Props> = ({
  size = 24,
  color = tabBarTintColor,
  strokeWidth = 2,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 23" fill="none">
      <Path
        d="M2.4 11.733C-.089 8.311.74 3.177 4.886 1.466c4.147-1.71 6.635 1.711 7.464 3.423.83-1.712 4.146-5.134 8.293-3.423 4.146 1.711 4.146 6.845 1.658 10.267C19.814 15.155 12.351 22 12.351 22s-7.464-6.845-9.952-10.267z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default FavoriteOutline
