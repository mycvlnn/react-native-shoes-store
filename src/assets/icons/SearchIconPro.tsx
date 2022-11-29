import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface ISize {
  size?: number
  background?: string
  color?: string
}

/** icon search: kính lúp vip  */
const SearchIconPro: (props: ISize) => React.ReactElement = ({ size = 24, color = '#6b6b6b' }) => {
  return (
    <Svg width={size} height={size} fill={color}>
      <Path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
    </Svg>
  )
}

export default SearchIconPro
