import React from 'react'

import Svg, { Mask, Rect, G, Path } from 'react-native-svg'

interface IProps {
  size?: number
}

const EnglishFlag: React.FC<IProps> = ({ size = 100 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <Mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        x={0}
        y={0}
        width={100}
        height={100}
      >
        <Rect width={100} height={100} rx={15} fill="#C4C4C4" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M-6.122-.14h44.12v29.414L-6.121-.14zm68.923 0h44.12l-44.12 29.414V-.14zm62.694 12.383v21.14H93.888l31.607-21.14zm0 54.235v21.14l-31.607-21.14h31.607zm-18.592 33.467h-44.12V70.53l44.12 29.414zm-68.923 0H-6.14L37.98 70.53v29.414zm-62.694-12.383v-21.14H6.893l-31.607 21.14zm0-54.235v-21.14l31.607 21.14h-31.607z"
          fill="#0437A0"
        />
        <Path
          d="M125.514 87.618l-31.72-21.14h31.72V33.383h-31.72l31.72-21.14V-.14h-18.593L62.819 29.274V-.14H38v29.414L-6.123-.14h-18.574v12.383l31.7 21.14h-31.7v33.095h31.7l-31.7 21.14V100h18.574l44.12-29.413V100H62.82V70.587L106.921 100h18.593V87.618z"
          fill="#F4F4F5"
        />
        <Path
          d="M58.152-.14v39.751h67.343V60.25H58.152V100H42.646V60.25h-67.342V39.61h67.342V-.139h15.506zm67.343 95.492l-43.32-28.874H68.247l50.2 33.467h6.954v-4.648l.093.055zm-43.32-61.97l43.32-28.873V-.14h-6.954l-50.2 33.467 13.833.056zm-49.625 0L-17.65-.083h-6.954v4.648L18.719 33.44l13.832-.056zM18.624 66.479l-43.32 28.874V100h6.953l50.2-33.467-13.833-.055z"
          fill="#F90805"
        />
      </G>
    </Svg>
  )
}

export default EnglishFlag
