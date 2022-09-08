import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { primaryBold } from '~/constants'

interface IProps {
  color?: string
  width?: number
  height?: number
}

const TickIcon: React.FC<IProps> = ({ width = 16, height = 12, color = primaryBold }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 12" fill="none">
      <Path
        d="M1 6l5.25 5L15 1"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default TickIcon
