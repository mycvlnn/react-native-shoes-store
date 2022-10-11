import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const Oclock: React.FC<IProps> = ({ size = 24, color = '#000' }) => {
  return (
    <Svg viewBox="0 0 512 512" width={size} height={size} fill={color}>
      <Path d="M232 120c0-13.3 10.7-24 24-24s24 10.7 24 24v123.2l85.3 56.8c11 7.4 14 22.3 5.8 33.3-6.5 11-21.4 14-32.4 5.8l-96-64c-6.7-3.6-10.7-11.1-10.7-20V120zM256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256z" />
    </Svg>
  )
}

export default Oclock
