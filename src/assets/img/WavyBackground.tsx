import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { Box } from '~/components'

interface Props {
  zIndex?: number
}

const WavyBackground: React.FC<Props> = ({ zIndex = -1 }) => {
  return (
    <Box backgroundColor="#000" height={80} zIndex={zIndex}>
      <Svg width="100%" height="300" viewBox="0 0 1440 600">
        <Path
          d="M0 600V200c93.627 25.407 187.254 50.813 289 36 101.746-14.813 211.612-69.847 314-58 102.388 11.847 197.297 90.574 297 81 99.703-9.574 204.201-107.45 295-132 90.799-24.55 167.9 24.225 245 73v400z"
          strokeWidth={0}
          fill="#00000088"
          transform="rotate(-180 720 300)"
        />
        <Path
          d="M0 600V400c109.79 25.732 219.579 51.464 313 57 93.421 5.536 170.474-9.124 264-33 93.526-23.876 203.526-56.967 296-56 92.474.967 167.421 35.99 259 47 91.579 11.01 199.79-1.995 308-15v200z"
          strokeWidth={0}
          fill="#000000ff"
          transform="rotate(-180 720 300)"
        />
      </Svg>
    </Box>
  )
}

export default WavyBackground
