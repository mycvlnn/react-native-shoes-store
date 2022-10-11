import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '~/components'
import StoreItem from './components/StoreItem'
import { sizes } from '~/constants'
import { IShop } from '~/models/Shops'
import { DATA_SHOP } from '~/data'

const StoreList = () => {
  const [listStore, setListStore] = useState<IShop[]>([])

  useEffect(() => {
    setTimeout(() => {
      setListStore(DATA_SHOP)
    }, 1000)
  })

  return (
    <Box marginHorizontal={sizes.horizontal}>
      <Typography fontSize={20} fontWeight="700" marginBottom={20}>
        Explore shop
      </Typography>
      {listStore.map((item) => {
        return <StoreItem key={item.id} {...item} />
      })}
    </Box>
  )
}

export default StoreList

const styles = StyleSheet.create({})
