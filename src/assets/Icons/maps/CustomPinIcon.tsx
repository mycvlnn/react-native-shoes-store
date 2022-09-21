import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
}

const CustomPinIcon: React.FC<IProps> = ({ width = 35, height = 47 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 35 47" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 46.055c.243 0 .477-.091.647-.254C29.382 35.23 35 25.51 35 16.637c0-4.412-1.844-8.644-5.127-11.764C26.593 1.753 22.14 0 17.5 0S8.407 1.753 5.127 4.873C1.844 7.993 0 12.225 0 16.637c0 8.875 5.618 18.596 16.853 29.164.17.163.404.254.647.254zm6.125-26.406a6.772 6.772 0 001.243-3.89c0-.92-.19-1.832-.56-2.682a7.035 7.035 0 00-1.598-2.274 7.248 7.248 0 00-.786-.65 7.5 7.5 0 00-1.604-.87 7.702 7.702 0 00-2.82-.532c-1.457 0-2.881.41-4.093 1.18a7.11 7.11 0 00-2.34 2.406 6.805 6.805 0 00-.373.737 6.675 6.675 0 00-.552 2.291 6.493 6.493 0 00.131 1.755 6.914 6.914 0 002.015 3.587 7.465 7.465 0 002.253 1.463 7.729 7.729 0 005.776.058 7.429 7.429 0 002.234-1.374 7.36 7.36 0 00.665-.678c.143-.17.28-.345.409-.527z"
        fill="url(#paint0_linear_1815_7369)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1815_7369"
          x1={-2.76316}
          y1={-3.41145}
          x2={47.9865}
          y2={13.0863}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.18191} stopColor="#F53100" />
          <Stop offset={0.416667} stopColor="#FF4B1F" />
          <Stop offset={0.776042} stopColor="#FF8D70" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default CustomPinIcon
