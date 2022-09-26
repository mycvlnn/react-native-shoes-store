import { StyleSheet } from 'react-native'
import React from 'react'
import { Box } from '~/components'

interface IProps {
  active?: boolean
}

const Pagination: React.FC<IProps> = ({ active }) => {
  return (
    <Box
      marginHorizontal={3}
      width={active ? 25 : 10}
      height={10}
      borderRadius={100}
      backgroundColor={active ? '#000' : '#ccc'}
    />
  )
}

export default Pagination

const styles = StyleSheet.create({})
