import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const BagSolidIcon: React.FC<IProps> = ({ width = 30, height = 27, color = '#101820' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 27" fill="none">
      <Path
        d="M27 5.684h-6V2.842C21 1.265 19.665 0 18 0h-6c-1.665 0-3 1.265-3 2.842v2.842H3C1.335 5.684.015 6.95.015 8.526L0 24.158C0 25.735 1.335 27 3 27h24c1.665 0 3-1.265 3-2.842V8.526c0-1.577-1.335-2.842-3-2.842zm-9 0h-6V2.842h6v2.842z"
        fill={color}
      />
    </Svg>
  )
}

export default BagSolidIcon
