import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

interface IProps {
  size?: number
}

const CloseGradientIcon: React.FC<IProps> = ({ size = 126 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 126 126" fill="none">
      <Path
        d="M63 0a63 63 0 100 126A63 63 0 0063 0zm0 115.5a52.498 52.498 0 01-51.491-62.742A52.5 52.5 0 1163 115.5z"
        fill="url(#paint0_linear_7536_31947)"
      />
      <Path
        d="M71.295 64.26l14.49-14.49a5.714 5.714 0 00-4.04-9.757 5.72 5.72 0 00-4.041 1.672L63.21 56.178 48.72 41.685a5.723 5.723 0 00-8.085 0 5.723 5.723 0 000 8.085L55.13 64.26 40.635 78.75a5.72 5.72 0 001.855 9.321 5.713 5.713 0 006.23-1.24l14.49-14.49L77.7 86.835a5.714 5.714 0 108.081-8.082L71.295 64.26z"
        fill="url(#paint1_linear_7536_31947)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_7536_31947"
          x1={-1.41123e-8}
          y1={1.18868}
          x2={158.551}
          y2={68.7037}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.265625} stopColor="#F53100" />
          <Stop offset={1} stopColor="#FF6C47" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_7536_31947"
          x1={38.9629}
          y1={40.4702}
          x2={99.9888}
          y2={66.4567}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.265625} stopColor="#F53100" />
          <Stop offset={1} stopColor="#FF6C47" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default React.memo(CloseGradientIcon)
