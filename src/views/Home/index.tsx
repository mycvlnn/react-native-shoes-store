import React, { useEffect, useState } from 'react'
import { Box, Typography } from '~/components'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native'
const Home = () => {
  const { t, i18n } = useTranslation()
  const [defaultLang, setDefaultLang] = useState('en')

  const handleChangeLang = () => {
    if (defaultLang === 'en') setDefaultLang('vi')
    else setDefaultLang('en')
  }

  useEffect(() => {
    if (defaultLang) i18n.changeLanguage(defaultLang).catch(() => setDefaultLang('en'))
  }, [defaultLang, i18n])

  return (
    <Box flex={1}>
      <Typography fontSize={30} fontWeight="bold">
        {t('hello')}
      </Typography>
      <Box>
        <Button title="Toggle language" onPress={handleChangeLang} />
      </Box>
    </Box>
  )
}

export default Home
