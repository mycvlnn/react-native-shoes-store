import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
}

const ViFlag: React.FC<IProps> = ({ size }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <Path
        d="M0 85c0 8.284 6.716 15 15 15h70c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15H15C6.716 0 0 6.716 0 15v70z"
        fill="#F90805"
      />
      <Path
        d="M49.5 26l5.523 17.989L73 43.941 58.435 55.027 64.019 73 49.5 61.865 34.98 73l5.585-17.973L26 43.941l17.977.048L49.5 26z"
        fill="#FEDC36"
      />
    </Svg>
  )
}

export default ViFlag
