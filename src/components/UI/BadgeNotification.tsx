import React from 'react'
import Box from '../Base/Box'
import { primaryBold } from '~/constants'

interface IProps {
  isShow?: boolean
  top?: number
  right?: number
  left?: number
  bottom?: number
  position?: 'absolute' | 'relative'
}

const BadgeNotification: React.FC<IProps> = ({
  isShow,
  top,
  left,
  right,
  bottom,
  position = 'absolute',
}) => {
  if (!isShow) return null

  return (
    <Box
      position={position}
      right={right}
      top={top}
      left={left}
      bottom={bottom}
      backgroundColor={primaryBold}
      borderRadius={1000}
      padding={4}
    />
  )
}

export default BadgeNotification
