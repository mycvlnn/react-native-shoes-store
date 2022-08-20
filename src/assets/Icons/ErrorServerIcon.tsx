import React from 'react'
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Rect, Stop } from 'react-native-svg'

interface ErrorServerIconProps {
  width?: number
  height?: number
}

/**
 * icon hiển thị lỗi từ server
 * @param props
 */
const ErrorServerIcon: React.FC<ErrorServerIconProps> = () => {
  return (
    <Svg width={375} height={358} viewBox="0 0 374 358" fill="none">
      <G clipPath="url(#clip0)">
        <G opacity="0.15">
          <Path
            opacity="0.8"
            d="M156.615 265.02C173.276 263.47 189.936 245.44 203.773 236.003C217.609 226.565 232.999 224.593 249.095 220.227C259.684 217.409 271.12 217.55 281.568 214.029C294.558 209.662 305.57 199.379 310.794 186.702C316.018 174.025 315.454 159.094 309.241 146.839C299.782 128.104 278.038 115.427 275.779 94.5798C274.368 81.4799 281.286 68.8025 282.415 55.7026C283.968 36.1231 273.52 14.8533 256.013 5.9791C216.903 -13.7412 179.771 21.3328 151.391 26.5446C138.826 28.7984 125.13 30.7704 112.564 33.0241C92.9389 36.5456 74.0195 41.8983 63.0067 65.5627C58.7711 74.5777 61.4537 91.0583 64.5598 100.496C78.3964 143.036 88.2797 147.543 83.4792 172.053C70.2074 239.102 108.893 269.387 156.615 265.02Z"
            fill="url(#paint0_linear)"
          />
        </G>
        <G opacity="0.8">
          <Path
            opacity="0.15"
            d="M251.213 266.006C259.543 264.598 267.732 263.189 276.062 261.921C279.027 261.499 281.851 260.935 284.675 259.808C291.31 256.991 295.97 249.807 295.97 242.623C295.97 239.806 295.264 236.989 293.57 234.594C290.463 230.228 284.675 227.129 279.451 226.284C266.602 224.171 253.33 225.579 240.623 228.115C196.008 236.848 204.761 264.034 218.315 270.514C228.058 275.162 241.753 268.964 251.213 266.006Z"
            fill="url(#paint1_linear)"
          />
        </G>
        <G opacity="0.8">
          <Path
            opacity="0.15"
            d="M296.958 120.216C291.028 113.455 286.086 105.708 283.686 97.1152C281.286 88.5228 281.709 78.9443 286.086 71.0561C287.639 68.239 289.757 65.7035 292.581 64.0132C295.405 62.4637 298.935 62.0411 301.9 63.4497C305.006 64.9992 306.841 68.5207 307.406 71.9013C307.971 75.4228 307.406 78.8034 306.841 82.3249C305.57 90.4948 304.582 99.2281 307.971 106.694C309.806 110.779 312.771 114.3 314.183 118.526C315.595 122.752 314.607 128.386 310.512 130.217C309.947 130.499 309.241 130.64 308.677 130.499C307.971 130.358 307.406 129.935 306.7 129.513C304.582 128.245 300.488 124.019 296.958 120.216Z"
            fill="url(#paint2_linear)"
          />
        </G>
        <G opacity="0.15">
          <Path
            opacity="0.15"
            d="M124.989 25.5585C127.39 23.7273 129.084 19.2198 127.248 16.8252C120.895 8.3736 102.258 10.6274 96.1866 12.036C85.8798 14.4306 76.5613 19.3606 81.0793 28.5165C83.4796 33.4466 89.8331 33.7283 92.5157 33.3057C94.4923 32.8832 101.128 30.4886 108.047 28.9391C115.671 27.2488 121.036 28.3757 124.989 25.5585Z"
            fill="url(#paint3_linear)"
          />
        </G>
        <G opacity="0.5">
          <Path
            opacity="0.5"
            d="M271.655 70.0075C276.879 70.0075 281.114 65.7822 281.114 60.5699C281.114 55.3577 276.879 51.1323 271.655 51.1323C266.43 51.1323 262.195 55.3577 262.195 60.5699C262.195 65.7822 266.43 70.0075 271.655 70.0075Z"
            fill="url(#paint4_linear)"
          />
          <Path
            opacity="0.5"
            d="M181.576 256.365C186.098 256.365 189.765 252.707 189.765 248.195C189.765 243.683 186.098 240.025 181.576 240.025C177.053 240.025 173.387 243.683 173.387 248.195C173.387 252.707 177.053 256.365 181.576 256.365Z"
            fill="url(#paint5_linear)"
          />
          <Path
            opacity="0.5"
            d="M254.712 30.5667C254.712 34.5107 251.465 37.7505 247.511 37.7505C243.558 37.7505 240.311 34.5107 240.311 30.5667C240.311 26.6226 243.558 23.3828 247.511 23.3828C251.606 23.3828 254.712 26.6226 254.712 30.5667Z"
            fill="url(#paint6_linear)"
          />
          <Path
            opacity="0.5"
            d="M278.997 142.128C278.997 144.1 277.302 145.79 275.326 145.79C273.349 145.79 271.655 144.1 271.655 142.128C271.655 140.156 273.349 138.465 275.326 138.465C277.302 138.465 278.997 140.015 278.997 142.128Z"
            fill="url(#paint7_linear)"
          />
          <Path
            opacity="0.5"
            d="M112.816 134.24C113.83 134.24 114.652 133.42 114.652 132.408C114.652 131.397 113.83 130.577 112.816 130.577C111.803 130.577 110.981 131.397 110.981 132.408C110.981 133.42 111.803 134.24 112.816 134.24Z"
            fill="url(#paint8_linear)"
          />
          <Path
            opacity="0.5"
            d="M75.26 99.8698C75.26 102.405 73.2834 104.377 70.7419 104.377C68.2005 104.377 66.2239 102.405 66.2239 99.8698C66.2239 97.3343 68.2005 95.3623 70.7419 95.3623C73.1422 95.3623 75.26 97.4752 75.26 99.8698Z"
            fill="url(#paint9_linear)"
          />
          <Path
            opacity="0.5"
            d="M105.333 97.1933C105.333 101.56 101.804 105.081 97.4269 105.081C93.05 105.081 89.5203 101.56 89.5203 97.1933C89.5203 92.8267 93.05 89.3052 97.4269 89.3052C101.804 89.3052 105.333 92.9675 105.333 97.1933Z"
            fill="url(#paint10_linear)"
          />
          <Path
            opacity="0.5"
            d="M312.882 187.062C312.882 188.048 312.035 188.893 311.047 188.893C310.058 188.893 309.211 188.048 309.211 187.062C309.211 186.076 310.058 185.23 311.047 185.23C312.035 185.23 312.882 185.935 312.882 187.062Z"
            fill="url(#paint11_linear)"
          />
          <Path
            opacity="0.5"
            d="M253.583 86.2062C253.583 87.1922 252.735 88.0373 251.747 88.0373C250.759 88.0373 249.912 87.1922 249.912 86.2062C249.912 85.2202 250.759 84.375 251.747 84.375C252.735 84.375 253.583 85.2202 253.583 86.2062Z"
            fill="url(#paint12_linear)"
          />
          <Path
            opacity="0.5"
            d="M110.981 211.994C110.981 213.403 109.851 214.529 108.44 214.529C107.028 214.529 105.898 213.403 105.898 211.994C105.898 210.585 107.028 209.458 108.44 209.458C109.851 209.458 110.981 210.585 110.981 211.994Z"
            fill="url(#paint13_linear)"
          />
          <Path
            opacity="0.5"
            d="M211.508 223.826C211.508 226.221 209.673 228.052 207.272 228.052C204.872 228.052 203.037 226.221 203.037 223.826C203.037 221.432 204.872 219.601 207.272 219.601C209.531 219.601 211.508 221.432 211.508 223.826Z"
            fill="url(#paint14_linear)"
          />
        </G>
      </G>
      <Path d="M201.251 148.279H225.782V89.0167H201.251V148.279Z" fill="#FFDB8C" />
      <Path
        d="M205.322 148.263H197.176C193.776 148.263 191.014 145.501 191.014 142.101V95.1613C191.014 91.7612 193.776 89 197.176 89H205.322C208.722 89 211.484 91.7612 211.484 95.1613V142.101C211.484 145.524 208.722 148.263 205.322 148.263Z"
        fill="#F15A22"
      />
      <Path
        d="M229.853 148.263H221.707C218.307 148.263 215.545 145.501 215.545 142.101V95.1613C215.545 91.7612 218.307 89 221.707 89H229.853C233.253 89 236.015 91.7612 236.015 95.1613V142.101C236.015 145.524 233.253 148.263 229.853 148.263Z"
        fill="#FFDB8C"
      />
      <Path d="M233.888 138.239H250.112V99.0123H233.888V138.239Z" fill="#FFDB8C" />
      <Path
        d="M245.006 138.245H250.414C252.673 138.245 254.499 136.419 254.499 134.16V103.103C254.499 100.844 252.673 99.0181 250.414 99.0181H245.006C242.747 99.0181 240.921 100.844 240.921 103.103V134.16C240.944 136.419 242.77 138.245 245.006 138.245Z"
        fill="#FFDB8C"
      />
      <Path
        d="M228.781 138.245H234.189C236.448 138.245 238.274 136.419 238.274 134.16V103.103C238.274 100.844 236.448 99.0181 234.189 99.0181H228.781C226.522 99.0181 224.696 100.844 224.696 103.103V134.16C224.696 136.419 226.522 138.245 228.781 138.245Z"
        fill="#FFDB8C"
      />
      <Path
        d="M236.015 138.473C235.878 138.473 235.787 138.382 235.787 138.245V99.0407C235.787 98.9038 235.878 98.8125 236.015 98.8125C236.152 98.8125 236.243 98.9038 236.243 99.0407V138.268C236.243 138.382 236.129 138.473 236.015 138.473Z"
        fill="#49102E"
      />
      <Path
        d="M200.485 110.839H168.081C166.369 110.839 165 109.469 165 107.758C165 106.046 166.369 104.677 168.081 104.677H200.485C202.196 104.677 203.565 106.046 203.565 107.758C203.565 109.469 202.196 110.839 200.485 110.839Z"
        fill="#FABE4A"
      />
      <Path
        d="M167.876 110.839C166.301 110.839 165 109.561 165 107.963V107.553C165 105.978 166.278 104.677 167.876 104.677C169.45 104.677 170.751 105.955 170.751 107.553V107.963C170.751 109.561 169.45 110.839 167.876 110.839Z"
        fill="#F15A22"
      />
      <Path
        d="M200.485 132.61H168.081C166.369 132.61 165 131.241 165 129.529C165 127.818 166.369 126.449 168.081 126.449H200.485C202.196 126.449 203.565 127.818 203.565 129.529C203.565 131.218 202.196 132.61 200.485 132.61Z"
        fill="#FABE4A"
      />
      <Path
        d="M167.875 132.608C166.301 132.608 165 131.331 165 129.733V129.3C165 127.725 166.278 126.424 167.875 126.424C169.45 126.424 170.751 127.702 170.751 129.3V129.71C170.751 131.308 169.45 132.608 167.875 132.608Z"
        fill="#F15A22"
      />
      <Path d="M200.941 110.838L191.014 114.193V110.838H200.941Z" fill="#49102E" />
      <Path d="M200.941 132.608L191.014 135.963V132.608H200.941Z" fill="#49102E" />
      <Path
        d="M398.579 253.697C381.191 245.075 365.696 235.86 352.506 226.349C340.251 217.499 329.617 208.125 320.946 198.499C307.345 183.4 298.057 167.274 292.535 149.164C287.628 133.084 277.017 124.873 269.007 120.813C260.336 116.433 252.851 115.84 252.531 115.817C251.025 115.703 249.701 116.844 249.61 118.349C249.496 119.855 250.637 121.178 252.143 121.269C252.212 121.269 258.852 121.793 266.543 125.694C276.834 130.894 283.817 139.333 287.309 150.761C293.082 169.646 302.758 186.479 316.884 202.172C325.829 212.093 336.737 221.719 349.311 230.797C363.345 240.924 379.913 250.686 398.534 259.787C398.557 259.787 398.579 259.81 398.602 259.81V253.697H398.579Z"
        fill="#FFDB8C"
      />
      <Path
        d="M141.738 145.324L115.273 148.495L122.932 212.43L149.398 209.26L141.738 145.324Z"
        fill="#FFDB8C"
      />
      <Path
        d="M127.339 211.902L118.55 212.955C114.882 213.395 111.546 210.773 111.107 207.104L105.04 156.463C104.601 152.795 107.223 149.459 110.891 149.02L119.68 147.967C123.348 147.527 126.684 150.149 127.123 153.817L133.19 204.459C133.633 208.152 131.008 211.463 127.339 211.902Z"
        fill="#F15A22"
      />
      <Path
        d="M153.805 208.732L145.016 209.785C141.348 210.224 138.012 207.602 137.572 203.934L131.506 153.293C131.066 149.624 133.688 146.289 137.356 145.849L146.145 144.796C149.814 144.357 153.149 146.979 153.589 150.647L159.656 201.288C160.098 204.981 157.473 208.292 153.805 208.732Z"
        fill="#FFDB8C"
      />
      <Path
        d="M107.831 160.374L90.3269 162.471L95.3969 204.791L112.901 202.694L107.831 160.374Z"
        fill="#FFDB8C"
      />
      <Path
        d="M100.884 204.109L95.049 204.808C92.6118 205.1 90.4063 203.367 90.1143 200.929L86.1002 167.423C85.8082 164.986 87.5418 162.78 89.9791 162.488L95.8138 161.789C98.2511 161.497 100.457 163.231 100.749 165.668L104.763 199.175C105.055 201.612 103.321 203.817 100.884 204.109Z"
        fill="#F15A22"
      />
      <Path
        d="M118.413 202.009L112.578 202.708C110.141 203 107.935 201.267 107.643 198.829L103.629 165.323C103.337 162.886 105.071 160.68 107.508 160.388L113.343 159.689C115.78 159.397 117.985 161.131 118.277 163.568L122.291 197.074C122.559 199.515 120.825 201.72 118.413 202.009Z"
        fill="#FFDB8C"
      />
      <Path
        d="M95.4845 180.045C95.0883 180.092 85.4427 181.549 75.1723 187.644C61.4329 195.809 53.2002 208.43 51.3689 224.171C50.3256 233.073 49.9123 241.573 49.5189 249.819C48.918 262.203 48.3579 273.88 45.667 284.333C42.7331 295.693 37.5522 304.438 29.3967 311.834C10.3822 329.007 -1.46127 341.258 -10.9405 350.393L-10.0461 357.859C-3.9928 351.993 11.6848 335.897 33.4159 316.242C42.5036 308.032 48.2276 298.37 51.4679 285.795C54.3165 274.771 54.8876 262.767 55.5026 250.081C55.886 241.96 56.2864 233.562 57.3009 224.84C58.9215 210.904 65.8948 200.139 78.0582 192.865C87.2895 187.32 96.2171 185.95 96.3409 185.935C97.9691 185.69 99.0937 184.176 98.8735 182.547C98.6315 180.946 97.1128 179.799 95.4845 180.045Z"
        fill="#FFDB8C"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="153.424"
          y1="6.47366"
          x2="219.024"
          y2="274.467"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="295.832"
          y1="248.704"
          x2="207.354"
          y2="248.704"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1="314.607"
          y1="96.8035"
          x2="282.265"
          y2="96.8035"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1="127.33"
          y1="25.196"
          x2="80.4162"
          y2="19.5553"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear"
          x1="262.15"
          y1="60.5026"
          x2="281.137"
          y2="60.5026"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear"
          x1="173.413"
          y1="248.124"
          x2="189.873"
          y2="248.124"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear"
          x1="240.469"
          y1="30.5576"
          x2="254.748"
          y2="30.5576"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear"
          x1="271.643"
          y1="142.084"
          x2="278.967"
          y2="142.084"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear"
          x1="110.981"
          y1="132.348"
          x2="114.686"
          y2="132.348"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint9_linear"
          x1="66.1788"
          y1="99.9178"
          x2="75.2155"
          y2="99.9178"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint10_linear"
          x1="89.5731"
          y1="97.2581"
          x2="105.385"
          y2="97.2581"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint11_linear"
          x1="309.226"
          y1="187.002"
          x2="312.931"
          y2="187.002"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint12_linear"
          x1="249.92"
          y1="86.1763"
          x2="253.625"
          y2="86.1763"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint13_linear"
          x1="105.948"
          y1="211.951"
          x2="110.948"
          y2="211.951"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <LinearGradient
          id="paint14_linear"
          x1="203.023"
          y1="223.795"
          x2="211.487"
          y2="223.795"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBB00" />
          <Stop offset="1" stopColor="#FFA100" />
        </LinearGradient>
        <ClipPath id="clip0">
          <Rect width="254" height="272" fill="white" transform="translate(61)" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default React.memo(ErrorServerIcon)
