import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  size?: number
  color?: string
}

const EmailIcon: React.FC<Props> = ({ color = 'black', size = 18 }) => {
  return (
    <Svg viewBox="0 0 512 512" width={size} height={size} fill={color}>
      <Path d="M464 64c26.5 0 48 21.49 48 48 0 15.1-7.1 29.3-19.2 38.4L275.2 313.6a32.1 32.1 0 01-38.4 0L19.2 150.4C7.113 141.3 0 127.1 0 112c0-26.51 21.49-48 48-48h416zM217.6 339.2a63.9 63.9 0 0076.8 0L512 176v208c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V176l217.6 163.2z" />
    </Svg>
  )
}

export default EmailIcon
