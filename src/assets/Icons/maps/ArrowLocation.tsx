import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const ArrowLocation: React.FC<IProps> = ({ width = 30, height = 32, color = '#101820' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 32" fill="none">
      <Path
        d="M29.842 2.114l-13.634 29.09c-.242.53-.646.796-1.215.796a1.69 1.69 0 01-.32-.046 1.28 1.28 0 01-.755-.51 1.495 1.495 0 01-.288-.898V17.455H1.359c-.313 0-.593-.103-.842-.307a1.385 1.385 0 01-.479-.807 1.562 1.562 0 01.085-.955c.128-.303.334-.53.618-.681L28.011.159c.184-.106.39-.159.617-.159.383 0 .703.144.959.432.213.212.344.473.394.784.05.31.003.61-.139.898z"
        fill={color}
      />
    </Svg>
  )
}

export default ArrowLocation
