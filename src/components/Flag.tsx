import React from 'react'
import { languagesCode } from '~/constants'
import { EnglishFlag, JaFlag, KoFlag, ViFlag } from '~/assets/icons'

interface IProps {
  languageCode: keyof typeof languagesCode
  size?: number
}

const Flag: React.FC<IProps> = ({ languageCode, size = 100 }) => {
  const renderFlag = () => {
    switch (languageCode) {
      case languagesCode.vi:
        return <ViFlag size={size} />
      case languagesCode.en:
        return <EnglishFlag size={size} />
      case languagesCode.ja:
        return <JaFlag size={size} />
      case languagesCode.ko:
        return <KoFlag size={size} />
      default:
        return null
    }
  }

  return <>{renderFlag()}</>
}

export default Flag
