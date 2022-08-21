import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: string
  size?: number
}

const XMarkIcon: React.FC<IProps> = ({ color = '#101820', size = 14 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M13.71 1.766L8.475 7l5.212 5.212a.992.992 0 01.312.71 1.077 1.077 0 01-1.462 1.006.969.969 0 01-.326-.219L7 8.443l-5.265 5.266a.969.969 0 01-.657.29A1.077 1.077 0 010 12.924a.991.991 0 01.29-.743L5.526 7 .302 1.777a.99.99 0 01-.301-.7A1.077 1.077 0 011.463.072a.97.97 0 01.325.219L7 5.557 12.266.291a.969.969 0 01.657-.29A1.077 1.077 0 0114 1.076a.993.993 0 01-.29.69z"
        fill={color}
      />
    </Svg>
  )
}

export default XMarkIcon
