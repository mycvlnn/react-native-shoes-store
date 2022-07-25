import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
  onForgotPassword: () => void
}

const ForgotPassword: React.FC<Props> = ({ onForgotPassword = () => {} }) => {
  return (
    <View>
      <Button title="Go back" onPress={onForgotPassword} />
      <Text>ForgotPassword Screen</Text>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})
