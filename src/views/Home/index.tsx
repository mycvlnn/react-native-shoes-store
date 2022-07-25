import React from 'react'
import { Box, Typography } from '~/components'
import { Button } from 'react-native'

import { useAppDispatch, useAppSelector } from '~/store/hooks'
import { appUserSelector } from '~/store/appUserSlice/selector'

import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { logoutUser } from '~/store/appUserSlice'
const Home = () => {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const appUser = useAppSelector(appUserSelector)
  const { t } = useTranslation()

  const handleLogout = () => {
    dispatch(logoutUser())
    navigation.navigate('Authen', { screen: 'SignIn' })
  }

  return (
    <Box flex={1}>
      <Typography fontSize={30} fontWeight="bold">
        {t('hello')}
      </Typography>
      <Typography>{JSON.stringify(appUser)}</Typography>
      {appUser.isLogin ? (
        <Button title="Logout " onPress={handleLogout} />
      ) : (
        <Button title="Login" onPress={() => navigation.navigate('Authen', { screen: 'SignUp' })} />
      )}
    </Box>
  )
}

export default Home
