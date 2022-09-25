import { Alert, FlatList, ListRenderItem, Pressable, TextInput } from 'react-native'
import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'

import { appUserSelector } from '~/store/appUserSlice/selector'
import { useAppDispatch, useAppSelector } from '~/store/hooks'
import { selectLocation } from '~/store/appUserSlice'
import { FORMAT_DATE, sizes, STATUS } from '~/constants'
import { Box, CustomInput, ErrorServer, Header, LoadingComponent, Typography } from '~/components'
import { CloseCircleIcon, IconPinMap, SearchIcon } from '~/assets/icons'
import { IAddressItem } from '~/models'
import { useDebounce } from '~/hooks'
import { getAutoCompleteAddress, getGeometryLocation } from '~/services'
import ItemAddress from './components/ItemAddress'
import ItemLocationSearch from './components/ItemLocationSearch'

const Address = () => {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const { address } = useAppSelector(appUserSelector)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [listAddressSearch, setListAddressSearch] = useState<IAddressItem[]>([])
  const [keywordSeachAddress, setKeywordSearchAddress] = useState('')
  const searchDebounced = useDebounce(keywordSeachAddress, 500)
  const refSearch = useRef() as MutableRefObject<TextInput>
  const isFocusScreen = useIsFocused()

  const fetchListAddressSearch = useCallback(async (keyword: string) => {
    setLoading(true)
    setError(false)
    try {
      const { statusCode, content } = await getAutoCompleteAddress(keyword)
      if (statusCode === STATUS.SUCCESS_NUM && content) {
        setListAddressSearch(content)
      } else {
        throw new Error()
      }
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!searchDebounced) {
      setListAddressSearch([])
      setLoading(false)
      return
    }

    //  call api search address google
    void fetchListAddressSearch(searchDebounced)
  }, [searchDebounced, fetchListAddressSearch])

  useEffect(() => {
    // Khi người dùng vào màn hình này thì phải reset value về giá trị ban đầu
    if (isFocusScreen) {
      setKeywordSearchAddress('')
      setListAddressSearch([])
    }
  }, [isFocusScreen])

  const handleGoback = () => {
    navigation.goBack()
  }

  const renderHeader = () => {
    return <Header goBack={handleGoback} title="Addresses" backgroundColor="#fff" color="#000" />
  }

  const handleChangeTextInputSearch = (text: string) => {
    setKeywordSearchAddress(text)
    setLoading(true)
  }

  const goToMapView = () => {
    navigation.navigate('PickLocation')
  }

  const renderMapIcon = () => {
    return (
      <Pressable onPress={goToMapView}>
        <IconPinMap />
      </Pressable>
    )
  }

  const handleClearAllText = () => {
    setKeywordSearchAddress('')
    setListAddressSearch([])
    refSearch.current?.blur()
  }

  const renderIconClearTextSearch = () => {
    if (!keywordSeachAddress) return null

    return (
      <Pressable hitSlop={20} onPress={handleClearAllText}>
        <CloseCircleIcon size={24} />
      </Pressable>
    )
  }

  const renderInputSearchAddress = () => {
    const isSearching = !!keywordSeachAddress

    return (
      <Box flexDirection="row" alignItems="center">
        <Box flex={1} marginRight={20}>
          <CustomInput
            ref={refSearch}
            onChangeText={handleChangeTextInputSearch}
            placeholder="Enter a new address"
            leftIcon={<SearchIcon size={18} />}
            rightIcon={renderIconClearTextSearch()}
            backgroundColor={isSearching ? '#fff' : 'rgba(241, 245, 248, 1)'}
            radius={30}
            value={keywordSeachAddress}
            containerStyle={{
              paddingHorizontal: 16,
              borderWidth: 1,
              borderColor: isSearching ? '#000' : 'transparent',
            }}
          />
        </Box>
        {renderMapIcon()}
      </Box>
    )
  }

  const renderMyLocation = () => {
    const { currentLocation } = address
    if (!currentLocation) return null

    return (
      <Box marginTop={20}>
        <ItemAddress
          isActive
          icon="currentLocation"
          title={currentLocation.title}
          description={currentLocation.description}
        />
      </Box>
    )
  }

  const handleChooseLocation = (itemLocation: IAddressItem) => {
    const { lat, long } = itemLocation

    /**
     * Trường hợp không có lat long => di chuyển đến màn hình edit.
     * Ngược lại chọn địa chỉ này và di chuyển đến màn hình home
     *  */
    if (!lat || !long) {
      navigation.navigate('AddressForm', {
        addressItem: itemLocation,
        isEdit: true,
      })

      return
    }

    const { icon, title } = itemLocation

    dispatch(
      selectLocation({
        ...itemLocation,
        title: icon === 'clock' ? dayjs(title).format(FORMAT_DATE.LL) : title,
      }),
    )
    navigation.navigate('BottomTab', { screen: 'Home' })
  }

  const handleEditAddress = (addressItem: IAddressItem) => {
    navigation.navigate('AddressForm', {
      addressItem,
      isEdit: true,
    })
  }

  const renderPopularAddress = () => {
    if (address.popular.length <= 0) return null

    return (
      <Box>
        <Typography fontSize={20} fontWeight="600" marginTop={20} marginBottom={10}>
          Popular addresses
        </Typography>
        {address.popular.map((item) => {
          return (
            <Box key={item.id} marginBottom={10}>
              <ItemAddress
                onPress={() => handleChooseLocation(item)}
                icon={item.icon}
                title={item.title}
                description={item.description}
                onEdit={() => handleEditAddress(item)}
              />
            </Box>
          )
        })}
      </Box>
    )
  }

  const renderRecentAddress = () => {
    const { recentLocation } = address
    if (!recentLocation || recentLocation.length === 0) return null

    return (
      <Box>
        <Typography fontSize={20} fontWeight="600" marginTop={20} marginBottom={10}>
          Recent locations
        </Typography>
        {recentLocation.map((item) => {
          const { id, description, title, icon } = item

          return (
            <ItemAddress
              key={id}
              onPress={() => handleChooseLocation(item)}
              icon={icon}
              title={dayjs(title).format(FORMAT_DATE.LL)}
              description={description}
            />
          )
        })}
      </Box>
    )
  }

  // Mặc định vào màn hình này sẽ có các địa chỉ mặc định
  const renderDefaultAddress = () => {
    return (
      <Box marginBottom={sizes.horizontal}>
        {renderMyLocation()}
        {renderPopularAddress()}
        {renderRecentAddress()}
      </Box>
    )
  }

  // Từ địa chỉ đã search được gọi api để lấy lat, long => sau đó di chuyển đến màn hình create address
  const goToNewAddress = async (addressItem: IAddressItem) => {
    const { description } = addressItem
    setLoading(true)

    try {
      const { statusCode, content } = await getGeometryLocation(description || '')
      if (statusCode === STATUS.SUCCESS_NUM && content) {
        navigation.navigate('AddressForm', {
          addressItem: {
            description: content.description,
            lat: content.lat,
            long: content.long,
          },
        })
      } else {
        throw new Error()
      }
    } catch (error) {
      setListAddressSearch([])
      Alert.alert('Error', 'Something went wrong')
    }
    setLoading(false)
  }

  const renderItemAddressSearch: ListRenderItem<IAddressItem> = ({ item }) => {
    return (
      <ItemLocationSearch
        title={item.description || ''}
        onPress={() => void goToNewAddress(item)}
      />
    )
  }

  const renderContent = () => {
    if (loading && keywordSeachAddress.trim()) return <LoadingComponent />

    if (error) return <ErrorServer onRetry={() => void fetchListAddressSearch(searchDebounced)} />

    if (!error && keywordSeachAddress.trim() && listAddressSearch.length === 0)
      return (
        <Typography textAlign="center" fontSize={20} fontWeight="600" marginTop={20}>
          No result
        </Typography>
      )

    return (
      <FlatList
        data={listAddressSearch}
        renderItem={renderItemAddressSearch}
        ListEmptyComponent={renderDefaultAddress}
      />
    )
  }

  return (
    <Box flex={1} backgroundColor="#fff">
      {renderHeader()}
      <Box paddingHorizontal={sizes.horizontal} flex={1}>
        {renderInputSearchAddress()}
        {renderContent()}
      </Box>
    </Box>
  )
}

export default Address
