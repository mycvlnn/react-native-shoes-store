import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
}

const KoFlag: React.FC<IProps> = ({ size = 102 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 102 102" fill="none">
      <Path
        d="M1 16C1 7.716 7.716 1 16 1h70c8.284 0 15 6.716 15 15v70c0 8.284-6.716 15-15 15H16c-8.284 0-15-6.716-15-15V16z"
        fill="#F1F0F0"
        stroke="#F3F3F4"
        strokeWidth={0.07}
        strokeMiterlimit={2.41}
      />
      <Path
        d="M66.97 57.004a16.66 16.66 0 01-3.873 5.344 16.803 16.803 0 01-5.658 3.436 16.898 16.898 0 01-12.99-.614 16.77 16.77 0 01-5.303-3.956 16.626 16.626 0 01-3.344-5.685 16.537 16.537 0 01.89-12.876c-1.606 8.226 4.844 13.178 10.813 10.818 3.297-1.318 3.94-3.505 6.391-5.315 6.114-4.475 14.14.55 13.133 8.776l-.058.072z"
        fill="#0437A0"
      />
      <Path
        d="M51.605 33.633a16.894 16.894 0 016.426 1.263 16.792 16.792 0 015.45 3.61 16.646 16.646 0 013.641 5.404 16.543 16.543 0 011.279 6.377 16.344 16.344 0 01-1.46 6.647c1.037-8.226-6.99-13.251-13.133-8.776-2.451 1.81-3.093 3.997-6.391 5.314-5.968 2.36-12.418-2.592-10.813-10.817a16.69 16.69 0 016.18-6.59 16.863 16.863 0 018.733-2.432h.088z"
        fill="#F90805"
      />
      <Path
        d="M20.29 39.527l9.324-13.873 2.32 1.535-9.324 13.873-2.32-1.535zm3.414 2.331l9.34-13.887 2.305 1.535-9.325 13.888-2.32-1.536zm-6.99-4.59l9.325-13.873 2.32 1.535-9.325 13.887-2.32-1.55zM80.819 40.974l-9.34-13.873 2.32-1.535 9.325 13.873-2.305 1.535zm3.575-2.245l-4.378-6.473 2.32-1.535 4.378 6.459-2.305 1.55h-.015zm-5.093-7.573l-4.246-6.314 2.32-1.535 4.246 6.314-2.32 1.535zm-1.912 12.15l-4.377-6.43 2.32-1.535 4.378 6.43-2.32 1.535zm-5.063-7.545l-4.261-6.343 2.32-1.535 4.261 6.342-2.32 1.536zM79.71 58.744l-4.378 6.43-2.32-1.535 4.377-6.43 2.32 1.535zm-5.064 7.545l-4.26 6.343-2.321-1.535 4.261-6.343 2.32 1.535zM86.7 63.393l-4.377 6.458-2.32-1.535 4.377-6.458 2.306 1.535h.014zm-5.078 7.559l-4.246 6.314-2.32-1.535 4.246-6.314 2.32 1.535zm1.46-9.818l-4.29 6.386-2.32-1.535 4.304-6.386 2.306 1.535zm-5.035 7.486l-4.29 6.401-2.32-1.55 4.29-6.386 2.32 1.535zM22.654 59.54l4.378 6.387-2.32 1.535-4.29-6.386 2.305-1.535h-.073zm3.429-2.331l9.325 13.888-2.32 1.535-9.325-13.888 2.32-1.535zm-6.99 4.59l9.325 13.874-2.32 1.535-9.325-13.873 2.32-1.535zm8.61 5.229l4.29 6.386-2.32 1.55-4.29-6.401 2.32-1.535z"
        fill="#101820"
      />
    </Svg>
  )
}

export default KoFlag
