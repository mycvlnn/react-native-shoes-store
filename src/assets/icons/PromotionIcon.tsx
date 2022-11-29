import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const PromotionIcon: React.FC<IProps> = ({ size = 15, color = '#fff' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 15 15" fill="none">
      <Path
        d="M14.473 8.773l-1.141 1.141v1.616a1.802 1.802 0 01-1.802 1.802H9.914l-1.14 1.14a1.802 1.802 0 01-2.548 0l-1.14-1.14H3.47a1.802 1.802 0 01-1.802-1.802V9.914L.527 8.774a1.802 1.802 0 010-2.547l1.141-1.141V3.47A1.802 1.802 0 013.47 1.668h1.615L6.226.527a1.802 1.802 0 012.547 0l1.141 1.142h1.616a1.802 1.802 0 011.802 1.802v1.616l1.14 1.14a1.802 1.802 0 010 2.547zM4.509 5.698a1.192 1.192 0 102.385.004 1.192 1.192 0 00-2.386-.004h.001zm5.727-.297a.45.45 0 00-.637-.637L4.764 9.6a.446.446 0 000 .637.433.433 0 00.318.132.443.443 0 00.319-.132L10.236 5.4zm.255 3.9A1.192 1.192 0 108.105 9.3a1.192 1.192 0 002.387.002h-.001z"
        fill={color}
      />
    </Svg>
  )
}

export default PromotionIcon
