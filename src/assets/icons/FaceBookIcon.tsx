import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  size?: number
  color?: string
  background?: string
}

const FaceBookIcon: React.FC<Props> = ({
  size = 24,
  color = '#fff',
  background = 'currentColor',
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={background}>
      <Path
        d="M23.5 12.07C23.5 5.719 18.351.57 12 .57S.5 5.719.5 12.07c0 5.74 4.205 10.497 9.703 11.36v-8.036h-2.92V12.07h2.92V9.536c0-2.882 1.717-4.474 4.344-4.474 1.258 0 2.574.225 2.574.225v2.83h-1.45c-1.429 0-1.874.886-1.874 1.796v2.157h3.19l-.51 3.324h-2.68v8.036c5.498-.863 9.703-5.62 9.703-11.36z"
        fill={color}
      />
    </Svg>
  )
}

export default FaceBookIcon
