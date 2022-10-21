import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface ISize {
  width?: number
  height?: number
  color?: string
}

const BellOutline: (props: ISize) => React.ReactElement = ({
  width = 15,
  height = 18,
  color = '#101820',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.52 12.973l-.033-.042c-.416-.516-.875-1.088-1.183-1.963-.307-.87-.438-1.954-.438-3.52 0-1.38-.32-2.38-.835-3.07v-.001c-.378-.508-.902-.92-1.672-1.247l-.07-.029-.064-.037a1.368 1.368 0 01-.372-.312l-.167-.2-.072-.251C8.395 1.548 7.877 1.25 7.5 1.25c-.377 0-.895.298-1.113 1.05l-.076.262-.18.207c-.1.115-.218.214-.353.292l-.066.038-.07.03c-.89.377-1.486.895-1.874 1.544-.396.662-.633 1.558-.633 2.774 0 1.566-.131 2.65-.438 3.52-.309.877-.769 1.449-1.185 1.966l-.031.039-.024.03c-.055.068-.108.133-.16.2l-.008.009a.2.2 0 00-.021.2l.002.004c.031.068.094.12.204.12H13.53a.232.232 0 00.127-.034.2.2 0 00.074-.087v-.002a.2.2 0 00.018-.107.185.185 0 00-.038-.094 76.916 76.916 0 01-.19-.238zm1.165-.545a1.45 1.45 0 01.18 1.513c-.242.52-.752.844-1.335.844H1.474a1.455 1.455 0 01-1.158-2.359l.168-.209.023-.029c.86-1.068 1.378-1.713 1.378-4.74 0-2.75 1.07-4.538 3.27-5.47a.123.123 0 00.031-.027C5.526.783 6.453 0 7.5 0c1.047 0 1.975.783 2.314 1.952.01.011.02.02.032.027.943.4 1.659.94 2.188 1.652.717.965 1.082 2.25 1.082 3.817 0 3.025.519 3.672 1.377 4.74v.001a29.747 29.747 0 01.192.239zM4.89 16.07a.153.153 0 00-.134.078.164.164 0 00-.005.158c.043.081.088.16.137.237l.002.003a3.19 3.19 0 001.009.997A3.057 3.057 0 007.5 18a3.058 3.058 0 002.078-.817 3.19 3.19 0 00.533-.637c.05-.077.096-.157.138-.239a.165.165 0 00-.004-.158.158.158 0 00-.134-.078H4.89z"
        fill={color}
      />
    </Svg>
  )
}

export default BellOutline