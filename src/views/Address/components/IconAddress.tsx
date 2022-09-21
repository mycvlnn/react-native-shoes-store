import React from 'react'
import { typeIconAddress } from '~/models'
import { Box } from '~/components'
import {
  ArrowLocation,
  BagSolidIcon,
  ClockPassIcon,
  HomeSolidIcon,
  SmileSolidIcon,
} from '~/assets/icons'

interface IProps {
  size?: number
  typeIcon: typeIconAddress
}

const IconAddress: React.FC<IProps> = ({ typeIcon }) => {
  const renderIcon = () => {
    switch (typeIcon) {
      case 'home':
        return <HomeSolidIcon />

      case 'work':
        return <BagSolidIcon />

      case 'friends':
        return <SmileSolidIcon />
      case 'clock':
        return <ClockPassIcon />

      case 'currentLocation':
        return <ArrowLocation />

      default:
        return null
    }
  }

  return <Box>{renderIcon()}</Box>
}

export default IconAddress
