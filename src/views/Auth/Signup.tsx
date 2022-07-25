import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unfillColor="#FFFFFF"
        text="Custom Checkbox"
        iconStyle={{ borderColor: 'blue', borderRadius: 3 }}
        onPress={(isChecked: boolean) => {}}
      />
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})
