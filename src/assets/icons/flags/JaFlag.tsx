import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
}

const JaFlag: React.FC<IProps> = ({ size = 100 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <Path
        d="M0 85c0 8.284 6.716 15 15 15h70c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15H15C6.716 0 0 6.716 0 15v70z"
        fill="#F1F0F0"
      />
      <Path d="M70.688 49.912a20.2 20.2 0 10-40.4 0 20.2 20.2 0 0040.4 0z" fill="#F90805" />
    </Svg>
  )
}

export default JaFlag
