import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  size?: number
  color?: string
}

const LockIcon: React.FC<Props> = ({ color = 'black', size = 18 }) => {
  return (
    <Svg viewBox="0 0 512 512" width={size} height={size} fill={color}>
      <Path d="M80 192v-48C80 64.47 144.5 0 224 0s144 64.47 144 144v48h16c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-35.3 28.65-64 64-64h16zm64 0h160v-48c0-44.18-35.8-80-80-80s-80 35.82-80 80v48z" />
    </Svg>
  )
}

export default LockIcon
