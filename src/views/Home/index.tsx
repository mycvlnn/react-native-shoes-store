import React, { useCallback, useEffect, useState } from 'react'
import { Box, Typography } from '~/components'
import { useTranslation } from 'react-i18next'
import { Alert, Button } from 'react-native'

import { useAppDispatch, useAppSelector } from '~/store/hooks'
import { appUserSelector } from '~/store/appUserSlice/selector'
import { saveInfoUser } from '~/store/appUserSlice'
import { signUp } from '~/services'
const Home = () => {
  const { t, i18n } = useTranslation()
  const [defaultLang, setDefaultLang] = useState('en')
  const appUser = useAppSelector(appUserSelector)
  const dispatch = useAppDispatch()
  const postSignUpUser = useCallback(async () => {
    try {
      const response = await signUp({
        email: 'lengoainguvip@gmail.com',
        gender: true,
        name: 'Chris',
        password: '1233231223',
        phone: '2131231231212',
      })
      console.log({ response })

      if (response.statusCode === 201) {
        console.log(response)
      } else {
        const { message } = response
        console.log({ message })
      }
    } catch (error) {
      console.log({ error })
    }
  }, [])
  useEffect(() => {
    void postSignUpUser()
  }, [postSignUpUser])

  // useEffect(() => {
  //   if (defaultLang) i18n.changeLanguage(defaultLang).catch(() => setDefaultLang('en'))
  // }, [defaultLang, i18n])

  return (
    <Box flex={1}>
      <Typography fontSize={30} fontWeight="bold">
        {t('hello')}
      </Typography>
    </Box>
  )
}

export default Home
