import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: string
}

const HomeSolidIcon: React.FC<IProps> = ({ width = 35, height = 29, color = '#101820' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 35 29" fill="none">
      <G clipPath="url(#clip0_2767_11990)" fill={color}>
        <Path d="M28.438 7.906l5.927 4.517a1.59 1.59 0 01.249 2.228 1.663 1.663 0 01-2.26.316L18.32 4.275s-.396-.345-.82-.345c-.424 0-.82.346-.82.346L2.646 14.966a1.663 1.663 0 01-2.302-.285 1.59 1.59 0 01.291-2.26L16.495.338a1.66 1.66 0 012.01 0l5.557 4.233 4.375 3.335z" />
        <Path d="M30.193 15.31l-12.26-9.342a.755.755 0 00-.865 0L4.807 15.31c-.238.181-.432.571-.432.867v12.287c0 .142.059.278.161.379.103.1.241.157.386.158h8.75a.554.554 0 00.386-.158c.103-.1.16-.237.161-.38v-8.592c0-.142.059-.278.161-.379.102-.1.241-.157.386-.158h5.469c.145.001.283.058.385.158.103.1.16.237.162.379v8.593c0 .142.058.278.16.379.103.1.242.157.386.158h8.75a.555.555 0 00.386-.159c.103-.1.16-.236.162-.378V16.175c0-.295-.195-.685-.433-.866z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2767_11990">
          <Path fill="#fff" d="M0 0H35V29H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HomeSolidIcon
