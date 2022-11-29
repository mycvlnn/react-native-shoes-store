import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: number
  height?: number
  color?: string
}

const ChevronBigLeft: React.FC<Props> = ({ width = 10, height = 16, color = 'currentColor' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 16" fill="none">
      <Path
        d="M8.24.222L.462 8l7.778 7.778 1.297-1.296L3.055 8l6.482-6.482L8.24.222z"
        fill={color}
      />
    </Svg>
  )
}

export default ChevronBigLeft
