import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const Chevronright: React.FC<IProps> = ({ width = 8, height = 14, color = '#000' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 8 14" fill="none">
      <Path
        d="M.306 12.883A.948.948 0 010 12.192c0-.26.11-.509.306-.692l5.172-4.844L.306 1.813a.946.946 0 01-.293-.689.949.949 0 01.306-.683C.512.26.774.157 1.049.155c.273-.003.537.096.734.274l5.911 5.536A.948.948 0 018 6.656c0 .26-.11.509-.306.692l-5.91 5.535a1.082 1.082 0 01-.74.287c-.276 0-.542-.103-.738-.287z"
        fill={color}
      />
    </Svg>
  )
}

export default Chevronright
