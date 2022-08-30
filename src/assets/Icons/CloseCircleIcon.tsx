import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

interface IProps {
  size?: number
  background?: string
  color?: string
}

const CloseCircleIcon: React.FC<IProps> = ({
  size = 17,
  color = '#101820',
  background = '#F1F5F8',
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 17 17" fill="none">
      <Circle cx={8.5} cy={8.5} r={8.5} fill={background} />
      <Path
        d="M11.855 5.883L9.238 8.5l2.606 2.606a.496.496 0 01.156.355.538.538 0 01-.731.503.484.484 0 01-.163-.11L8.5 9.223l-2.633 2.633A.484.484 0 015.54 12 .538.538 0 015 11.46a.495.495 0 01.146-.371L7.763 8.5 5.15 5.889a.495.495 0 01-.15-.35.538.538 0 01.73-.503.485.485 0 01.163.11L8.5 7.777l2.633-2.633A.485.485 0 0111.462 5 .538.538 0 0112 5.54a.496.496 0 01-.145.344z"
        fill={color}
      />
    </Svg>
  )
}

export default CloseCircleIcon
