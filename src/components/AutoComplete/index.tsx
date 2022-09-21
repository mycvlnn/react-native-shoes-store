import { ScrollView, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Box from '../Base/Box'
import ItemAutoComplete from './ItemAutoComplete'
import Typography from '../Base/Typography'
import LoadingComponent from '../UI/LoadingComponent'
import useDebouce from '~/hooks/useDebounce'
import { STATUS } from '~/constants'
import { getAutoCompleteAddress } from '~/services'
import { IAddressItem } from '~/models'

interface IProps {
  keyWord: string
  onSelectItem: (address: string) => void
}

const AutoComplete: React.FC<IProps> = ({ keyWord = '', onSelectItem }) => {
  const [data, setData] = useState<IAddressItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const searchDebounced = useDebouce(keyWord)

  const fetchListAddressSearch = useCallback(async (keyword: string) => {
    setLoading(true)
    setError(false)
    try {
      const { statusCode, content } = await getAutoCompleteAddress(keyword)
      if (statusCode === STATUS.SUCCESS_NUM && content) {
        setData(content)
      } else {
        throw new Error()
      }
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }, [])

  const renderBoxEmpty = (text: string) => {
    return (
      <Box flex={1} alignItems="center" justifyContent="center">
        <Typography fontSize={20} color="#ccc" fontWeight="600">
          {text}
        </Typography>
      </Box>
    )
  }

  useEffect(() => {
    if (!searchDebounced.trim()) {
      setData([])
      setLoading(false)
      return
    }

    //  call api search address google
    void fetchListAddressSearch(searchDebounced)
  }, [searchDebounced, fetchListAddressSearch])

  const renderContent = () => {
    if (loading) return <LoadingComponent />

    if (error) return renderBoxEmpty('Error server')

    if (data.length === 0 && searchDebounced.trim()) {
      return renderBoxEmpty('No data')
    }

    return (
      <ScrollView style={{ flex: 1 }}>
        {data.map((item) => {
          return (
            <ItemAutoComplete
              key={item.id}
              title={item.description || ''}
              onPress={() => onSelectItem(item.description || '')}
            />
          )
        })}
      </ScrollView>
    )
  }

  if (!keyWord.trim()) return null

  return (
    <Box
      width="100%"
      backgroundColor="#fff"
      borderRadius={8}
      borderWidth={1}
      borderColor="#000"
      height={200}
      zIndex={1}
      padding={20}
    >
      {renderContent()}
    </Box>
  )
}

export default AutoComplete
