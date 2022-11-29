import * as React from 'react'
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg'

interface IProps {
  size?: number
}

const TickGradient: React.FC<IProps> = ({ size = 126 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 126 126" fill="none">
      <Circle cx={63} cy={63} r={57} stroke="url(#paint0_linear_2238_8169)" strokeWidth={12} />
      <Path
        stroke="url(#paint1_linear_2238_8169)"
        strokeWidth={12}
        strokeLinecap="round"
        d="M36.4853 67L55 85.5147"
      />
      <Path
        stroke="url(#paint2_linear_2238_8169)"
        strokeWidth={12}
        strokeLinecap="round"
        d="M92 49.4853L55.4853 86"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2238_8169"
          x1={14.2258}
          y1={8.68965}
          x2={133.866}
          y2={126.716}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.286458} stopColor="#FF8F1F" />
          <Stop offset={0.614583} stopColor="#DD1FFF" />
          <Stop offset={0.890625} stopColor="#40ACDD" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_2238_8169"
          x1={30.9996}
          y1={70.0972}
          x2={29.6932}
          y2={71.4748}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.286458} stopColor="#FF8F1F" />
          <Stop offset={0.614583} stopColor="#DD1FFF" />
          <Stop offset={0.890625} stopColor="#40ACDD" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_2238_8169"
          x1={86.8706}
          y1={46.0319}
          x2={85.5066}
          y2={44.7106}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.286458} stopColor="#FF8F1F" />
          <Stop offset={0.614583} stopColor="#DD1FFF" />
          <Stop offset={0.890625} stopColor="#40ACDD" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default TickGradient
