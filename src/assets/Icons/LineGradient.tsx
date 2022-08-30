import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
}

const LineGradient: React.FC<IProps> = ({ width = 390, height = 3 }) => {
  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} 3`} fill="none">
      <Path stroke="url(#paint0_linear_1354_6330)" strokeWidth={3} d="M-2 1.5L390 1.5" />
      <Defs>
        <LinearGradient
          id="paint0_linear_1354_6330"
          x1={37.4996}
          y1={-22.9974}
          x2={308.499}
          y2={17.5037}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#165C7D" />
          <Stop offset={0.723958} stopColor="#FF8D70" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default LineGradient
