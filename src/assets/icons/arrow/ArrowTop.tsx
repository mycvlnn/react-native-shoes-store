import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const ArrowTopIcon: React.FC<IProps> = ({ width = 19, height = 17, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 17 19" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.714 17.813c0 .315-.128.617-.356.84A1.228 1.228 0 018.5 19c-.322 0-.63-.125-.858-.348a1.174 1.174 0 01-.356-.84V4.057l-5.21 5.098a1.218 1.218 0 01-.86.349 1.24 1.24 0 01-.86-.349A1.188 1.188 0 010 8.314a1.166 1.166 0 01.356-.841L7.64.349A1.216 1.216 0 018.5 0a1.238 1.238 0 01.86.349l7.284 7.124c.228.223.356.525.356.84 0 .316-.128.618-.356.841a1.23 1.23 0 01-.86.349 1.23 1.23 0 01-.86-.349l-5.21-5.098v13.757z"
        fill={color}
      />
    </Svg>
  )
}

export default ArrowTopIcon
