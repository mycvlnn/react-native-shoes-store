import React from 'react'
import Svg, { Path, Defs, G, Rect, ClipPath } from 'react-native-svg'
import { tabBarTintColor } from '~/constants'

interface Props {
  size?: number
  background?: string
  color?: string
}

/** icon home, outline */
const HomeOutlineIcon: React.FC<Props> = ({ size = 24, color = tabBarTintColor }) => {
  return (
    <Svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0)">
        <Path
          d="M22.8218 10.9688C22.8218 10.9688 22.8218 10.9688 22.8218 10.9689C22.8218 10.9689 22.8218 10.9689 22.8218 10.9689L22.8218 10.9689L22.8218 10.9689L22.8219 10.9689L22.8219 10.9689C22.8219 10.9689 22.8219 10.969 22.8219 10.969C22.8219 10.969 22.8219 10.969 22.8219 10.969C23.3891 11.5377 23.3888 12.4637 22.8211 13.032C22.544 13.309 22.1799 13.4597 21.7889 13.4597H21.4271H20.6771V14.2097V21.4144C20.6771 22.4257 19.853 23.25 18.8411 23.25H15.0578V17.6484C15.0578 16.5837 14.1928 15.7187 13.128 15.7187H10.8689C9.80407 15.7187 8.93911 16.5837 8.93911 17.6484V23.25H5.15579C4.14391 23.25 3.31979 22.4257 3.31979 21.4144V14.2097V13.4597H2.56979H2.18176L2.16401 13.458L2.14363 13.4571C1.77632 13.4413 1.43551 13.2917 1.1758 13.0319L1.17568 13.0317C0.608479 12.4645 0.607332 11.5399 1.17299 10.9709L1.17938 10.9645L1.1833 10.9605L1.18362 10.9601L10.9663 1.17761L10.436 0.647278L10.9663 1.17761C11.2432 0.900754 11.6072 0.75 11.9984 0.75C12.3895 0.75 12.7535 0.90084 13.0302 1.17767L13.0304 1.1778L22.8218 10.9688ZM22.8218 10.9688L22.8218 10.9688L22.8217 10.9688C22.8217 10.9688 22.8218 10.9688 22.8218 10.9688ZM22.8217 10.9687C22.8217 10.9687 22.8217 10.9687 22.8217 10.9687C22.8217 10.9688 22.8217 10.9688 22.8217 10.9688L22.8217 10.9687ZM22.8217 10.9687L22.8216 10.9687L22.8216 10.9687M22.8217 10.9687C22.8216 10.9687 22.8216 10.9687 22.8216 10.9687M22.8216 10.9687C22.8216 10.9687 22.8216 10.9687 22.8216 10.9687"
          stroke={`${color}`}
          strokeWidth="2"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HomeOutlineIcon
