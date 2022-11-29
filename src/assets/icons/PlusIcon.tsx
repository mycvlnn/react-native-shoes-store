import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  size?: number
  color?: string
}

const PlusIcon: React.FC<Props> = ({ size = 18, color = 'currentColor' }) => {
  return (
    <Svg viewBox="0 0 448 512" width={size} height={size} fill={color}>
      <Path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99h144v-144C192 62.32 206.33 48 224 48s32 14.32 32 32.01v144h144c17.7-.01 32 14.29 32 31.99z" />
    </Svg>
  )
}

export default PlusIcon
