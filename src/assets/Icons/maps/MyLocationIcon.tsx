import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
}

const MyLocationIcon: React.FC<IProps> = ({ size = 28 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M23.333 14H26m-12 9.333a9.334 9.334 0 100-18.668 9.334 9.334 0 000 18.668v0zm0 0V26v-2.667zM4.667 14H2h2.667zM14 4.667V2v2.667z"
        stroke="#101820"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MyLocationIcon
