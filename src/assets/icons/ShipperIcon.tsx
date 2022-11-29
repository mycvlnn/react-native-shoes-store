import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { textColor } from '~/constants'

interface IProps {
  width?: number
  height?: number
  color?: string
}
const ShipperIcon: React.FC<IProps> = ({ width = 16, height = 15, color = textColor }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 15" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.79 12.47h1.96a.98.98 0 11-1.96 0zm9.286-.979a.98.98 0 11-.806.423l.513.65c.095.131.258.188.399.107.14-.081.166-.248.107-.398l-.391-.766a.998.998 0 01.178-.016zM2.98 4.941a.356.356 0 01.152.072c.526.36.69 1.382.226 1.845-.067.067-.096.108-.096.224v1.092c0 .206-.393.206-.393 0l-.001-1.38v-1.63c0-.172.042-.23.112-.224zm-1.115 0c.049-.002.098.041.102.125l.035.826c-.004.121.177.121.173 0v-.8c0-.103.057-.132.137-.035.13.157.2.51.2.763 0 .337-.135.644-.352.788-.08.053-.097.07-.097.186v1.38c0 .206-.396.206-.396 0v-1.38c-.004-.11-.003-.129-.097-.187-.221-.137-.353-.45-.353-.787 0-.252.072-.606.2-.763.082-.097.138-.068.138.035v.8c-.005.121.177.121.173 0l.035-.82c.004-.088.053-.132.102-.132zm4.678-2.114c-.332.008-.651.179-.737.478l-.937 3.25c-.145.506.02 1.182.786 1.182h2.396l.526 2.785c.092.49 1.027.498.99-.002L9.33 7.372c-.038-.505-.242-.694-.608-.743l-1.834-.278.186-1.56.86.65c.18.137.264.159.47.194l1.049.186c.11.02.16.067.235.248l1.562 3.825c.354.868.078 1.457-1.052 1.457H8.182c-.872 0-1.338-.74-1.054-1.38l.415-.933c.188-.423-.036-.867-.488-.867h-2.65v-4.07c0-.592-.314-.766-.839-.766H2.442A1.958 1.958 0 00.48 5.3v3.216c0 .349.26.63.582.63h2.117c-.96.603-1.57 1.784-1.466 2.821.045.45.305.505.498.505h.622a1.938 1.938 0 103.876 0h4.43a1.938 1.938 0 103.614-.968l.119.018c.218.034.274-.233.166-.468a2.286 2.286 0 00-1.959-1.332c-.081-.004-.156-.051-.156-.152v-.154c0-.19.001-.342-.148-.545l-2.098-2.924c-.107-.183-.08-.285.105-.285h.354c.239 0 .412-.05.378-.327l-.105-.696c-.027-.217-.119-.366-.432-.366h-.556c-.59 0-.83.41-.987.624a2.49 2.49 0 00-.075.106l-.846-.269-1.274-1.611c-.17-.208-.436-.3-.694-.295zM7.114.003a1.291 1.291 0 00-1.285.82 1.28 1.28 0 00.395 1.471c.25.195.548.332.809.334a1.158 1.158 0 001.156-1.15l-.33.02a.825.825 0 01-.979.789.796.796 0 00.117-.279c.158-.662.63-.671 1.07-.704.128-.01.3-.01.451-.01.261 0 .27-.328.046-.372l-.3-.053a1.356 1.356 0 00-.417-.58 1.289 1.289 0 00-.733-.286z"
        fill={textColor}
      />
    </Svg>
  )
}

export default ShipperIcon