import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { textColor } from '~/constants'

interface IProps {
  width?: number
  height?: number
  color?: string
}
const StarIconOutline: React.FC<IProps> = ({ width = 14, height = 15, color = textColor }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 15" fill="none">
      <Path
        d="M7.28 11.427l-.242-.136-.244.134-3.67 2.02h0a.582.582 0 01-.102.046.515.515 0 01.001-.107l.702-4.313.04-.25-.176-.18L.607 5.604a.64.64 0 01-.081-.102.647.647 0 01.131-.032H.66l4.088-.626.264-.04.113-.242L6.968.64l.03-.057a.846.846 0 01.03.059l1.85 3.92.114.241.263.04 4.089.627h.002c.056.008.097.02.126.03a.658.658 0 01-.084.104h-.001l-2.972 3.037-.177.181.04.25.704 4.324h0a.752.752 0 01.01.086.812.812 0 01-.128-.045l-3.584-2.01z"
        stroke={color}
      />
    </Svg>
  )
}

export default StarIconOutline
