import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const PenIcon: React.FC<IProps> = ({ size = 18, color = '#101820' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        d="M1.85 12.99l3.165 3.165 9.494-9.497-3.165-3.165-9.493 9.496zM0 18l4.218-1.054-3.165-3.166L0 18zM17.672 1.91L16.09.328a1.119 1.119 0 00-1.582 0l-2.373 2.374 3.164 3.165 2.373-2.374a1.118 1.118 0 000-1.583z"
        fill={color}
      />
    </Svg>
  )
}

export default PenIcon
