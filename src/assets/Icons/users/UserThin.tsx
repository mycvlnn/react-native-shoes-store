import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const UserThin: React.FC<IProps> = ({ width = 15, height = 18, color = '#000' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 18" fill="none">
      <G clipPath="url(#clip0_4522_26576)" fill={color}>
        <Path d="M7.43 9.52A7.43 7.43 0 000 16.95a.94.94 0 00.94.94h13a.94.94 0 00.94-.94 7.44 7.44 0 00-7.45-7.43zm6.42 7.36H1.02a6.42 6.42 0 0112.83 0zM7.43 8.81a4.41 4.41 0 10.02-8.82 4.41 4.41 0 00-.02 8.82zm-3.39-4.4a3.39 3.39 0 116.78-.02 3.39 3.39 0 01-6.78.02z" />
      </G>
      <Defs>
        <ClipPath id="clip0_4522_26576">
          <Path fill="#fff" d="M0 0H14.86V17.89H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default UserThin
