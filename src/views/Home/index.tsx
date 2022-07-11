import React, { useEffect, useState } from 'react'
import { Box, Typography } from '~/components'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native'

import { useAppDispatch, useAppSelector } from '~/store/hooks'
import { appUserSelector } from '~/store/appUserSlice/selector'
import { saveInfoUser } from '~/store/appUserSlice'
const Home = () => {
  const { t, i18n } = useTranslation()
  const [defaultLang, setDefaultLang] = useState('en')
  const appUser = useAppSelector(appUserSelector)
  const dispatch = useAppDispatch()

  const handleChangeLang = () => {
    if (defaultLang === 'en') setDefaultLang('vi')
    else setDefaultLang('en')
    dispatch(
      saveInfoUser({
        email: 'lengoaingu@gmail.com',
        localeCode: defaultLang,
        phoneNumber: 84968785644,
        token: 'token',
        userName: 'Chris Lee',
      }),
    )
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
      <Box>
        <Typography>{appUser.userName}</Typography>
        <Typography>{appUser.token}</Typography>
        <Typography>{appUser.email}</Typography>
        <Typography>{appUser.phoneNumber}</Typography>
      </Box>
    </Box>
  )
}

export default Home
