import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

interface IProps {
  size?: number
}

const LocationSearch: React.FC<IProps> = ({ size = 18 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.478 7.466a1.478 1.478 0 11-2.955 0 1.478 1.478 0 012.955 0z"
        fill="url(#paint0_linear_1821_6450)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a9 9 0 100 18A9 9 0 009 0zm.13 13.807a.185.185 0 01-.26 0c-2.254-2.23-3.382-4.282-3.382-6.155a3.512 3.512 0 017.024 0c0 1.872-1.128 3.924-3.382 6.155z"
        fill="url(#paint1_linear_1821_6450)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1821_6450"
          x1={8.96878}
          y1={5.54353}
          x2={10.2152}
          y2={8.95476}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#228DBF" />
          <Stop offset={0.182292} stopColor="#40ACDD" />
          <Stop offset={0.34375} stopColor="#86CAEA" />
          <Stop offset={0.642826} stopColor="#FC9" />
          <Stop offset={0.895624} stopColor="#FF8F1F" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1821_6450"
          x1={8.81053}
          y1={-2.7}
          x2={16.3981}
          y2={18.0661}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#228DBF" />
          <Stop offset={0.182292} stopColor="#40ACDD" />
          <Stop offset={0.34375} stopColor="#86CAEA" />
          <Stop offset={0.642826} stopColor="#FC9" />
          <Stop offset={0.895624} stopColor="#FF8F1F" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default LocationSearch
