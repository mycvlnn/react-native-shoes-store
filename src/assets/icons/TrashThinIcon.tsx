import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const TrashThinIcon: React.FC<IProps> = ({ width = 18, height = 18, color = '#000' }) => {
  return (
    <Svg viewBox="0 0 448 512" width={width} height={height} fill={color}>
      <Path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0h120.4c12.1 0 23.2 6.848 28.6 17.69L320 32h96c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h96l7.2-14.31zM31.1 128H416v320c0 35.3-28.7 64-64 64H95.1c-34.45 0-64-28.7-64-64V128zm80 80v224c0 8.8 8.1 16 16 16 9.7 0 16-7.2 16-16V208c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16zm96 0v224c0 8.8 8.1 16 16 16 9.7 0 16.9-7.2 16.9-16V208c0-8.8-7.2-16-16.9-16-7.9 0-16 7.2-16 16zm96.9 0v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
    </Svg>
  )
}

export default TrashThinIcon
