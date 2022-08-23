import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppDispatch } from '~/store/hooks'
import { logoutUser } from '~/store/appUserSlice'

const Setting = () => {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <View>
      <Text>Setting Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})
