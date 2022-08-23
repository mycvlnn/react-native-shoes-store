import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: string
  width?: number
  height?: number
}
const PolygonIcon: React.FC<IProps> = ({ color = '#000', width = 8, height = 10 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 8 10" fill="none">
      <Path d="M0 5L7.5.67v8.66L0 5z" fill={color} />
    </Svg>
  )
}

export default PolygonIcon
