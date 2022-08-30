import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box, Typography } from '~/components'

const SearchEmpty = () => {
  const navigation = useNavigation()

  return (
    <Box margin={36} justifyContent="center" alignItems="center">
      <Typography fontWeight="600" fontSize={24} textAlign="center">
        We didn’t find a match
      </Typography>
      <Typography fontWeight="300" fontSize={18} marginTop={6} textAlign="center">
        Try searching for something else instead
      </Typography>
      <Pressable
        style={styles.btnBack}
        onPress={() => navigation.navigate('BottomTab', { screen: 'Home' })}
      >
        <Typography fontSize={18} color="black" fontWeight="600">
          Back to home
        </Typography>
      </Pressable>
    </Box>
  )
}

export default SearchEmpty

const styles = StyleSheet.create({
  btnBack: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
  },
})
