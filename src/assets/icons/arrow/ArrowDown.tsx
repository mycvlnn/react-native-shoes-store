import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { textColor } from '~/constants'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const ArrowDownIcon: React.FC<IProps> = ({ width = 13, height = 8, color = textColor }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 13 8" fill="none">
      <Path
        d="M.286.306A.946.946 0 01.977 0c.26 0 .508.11.691.306l4.838 5.172L11.344.306a.945.945 0 01.687-.293.947.947 0 01.683.306c.181.193.284.455.286.73.002.273-.096.537-.274.734l-5.53 5.911a.946.946 0 01-.69.306.946.946 0 01-.691-.306L.286 1.784A1.083 1.083 0 010 1.043C0 .769.103.503.286.307z"
        fill={color}
      />
    </Svg>
  )
}

export default ArrowDownIcon
