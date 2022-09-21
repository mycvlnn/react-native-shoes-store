import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
}

const ActiveGradientIcon: React.FC<IProps> = ({ width = 16, height = 12 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 12" fill="none">
      <Path
        d="M1 6l5.25 5L15 1"
        stroke="url(#paint0_linear_2767_11985)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2767_11985"
          x1={6.34722}
          y1={2.25}
          x2={13.9304}
          y2={3.91478}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF8F1F" />
          <Stop offset={1} stopColor="#40ACDD" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default ActiveGradientIcon
