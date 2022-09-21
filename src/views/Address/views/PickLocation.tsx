import { Alert, Pressable, StyleSheet } from 'react-native'
import React, { MutableRefObject, useRef, useState } from 'react'
import { RESULTS } from 'react-native-permissions'
import MapView, { LatLng, PROVIDER_GOOGLE, Region } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'
import { Box, ButtonOpacity, Header, LoadingOverlay, Typography } from '~/components'
import { defaultRegion, primaryColor, sizes, STATUS } from '~/constants'
import { CustomPinIcon, MyLocationIcon } from '~/assets/icons'
import { IAddressItem } from '~/models'
import { getAddressByGeocoding } from '~/services'
import { useAppSelector } from '~/store/hooks'
import { appUserSelector } from '~/store/appUserSlice/selector'
import { checkAndRequestLocationPermission, getCurrentLocation } from '~/utils'

const PickLocation = () => {
  const navigaton = useNavigation()
  const { address } = useAppSelector(appUserSelector)
  const { currentLocation } = address
  const refMap = useRef() as MutableRefObject<MapView>
  const [loading, setLoading] = useState(false)

  const [currentAddress, setCurrentAddress] = useState<IAddressItem>({
    description: (currentLocation && currentLocation.description) || '',
  })

  const handleGoback = () => navigaton.goBack()

  const renderHeader = () => {
    return <Header goBack={handleGoback} title="Addresses" backgroundColor="#fff" color="#000" />
  }

  const renderTextAddress = () => {
    return (
      <Box
        position="absolute"
        top="15%"
        left={sizes.horizontal}
        right={sizes.horizontal}
        backgroundColor="#fff"
        paddingVertical={10}
        borderRadius={20}
        paddingHorizontal={10}
      >
        <Typography
          textAlign="center"
          numberOfLines={1}
          fontSize={16}
          fontWeight="600"
          color="#000"
        >
          {currentAddress?.description || ''}
        </Typography>
      </Box>
    )
  }

  const fetchAddressByCoordinate = async (coordinate: LatLng) => {
    setLoading(true)
    const { latitude, longitude } = coordinate
    try {
      const { statusCode, content } = await getAddressByGeocoding({ latitude, longitude })
      if (statusCode === STATUS.SUCCESS_NUM && content) {
        setCurrentAddress(content[0] || {})
      } else {
        throw new Error()
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong!')
    }
    setLoading(false)
  }

  const handleChangeRegion = (region: Region) => {
    const { latitude, longitude } = region
    void fetchAddressByCoordinate({ latitude, longitude })
  }

  const renderViewMap = () => {
    return (
      <Box flex={1}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          ref={refMap}
          region={{
            latitude: (currentLocation && currentLocation.lat) || defaultRegion.latitude,
            longitude: (currentLocation && currentLocation.long) || defaultRegion.longitude,
            latitudeDelta: defaultRegion.latitudeDelta,
            longitudeDelta: defaultRegion.longitudeDelta,
          }}
          loadingEnabled
          loadingIndicatorColor={primaryColor}
          onRegionChangeComplete={handleChangeRegion}
        ></MapView>
        <Box position="absolute" top="44.4%" left="45.4%">
          <CustomPinIcon />
        </Box>
      </Box>
    )
  }

  const handleGetMyLocation = async () => {
    try {
      const status = await checkAndRequestLocationPermission()
      if (status === RESULTS.GRANTED) {
        const { coords } = await getCurrentLocation()
        const { latitude, longitude } = coords
        refMap.current?.animateToRegion(
          {
            latitude,
            longitude,
            latitudeDelta: defaultRegion.latitudeDelta,
            longitudeDelta: defaultRegion.longitudeDelta,
          },
          300,
        )
        const { statusCode, content } = await getAddressByGeocoding({ latitude, longitude })
        if (statusCode === STATUS.SUCCESS_NUM && content) {
          setCurrentAddress(content[0] || {})
        } else {
          throw new Error()
        }
      } else {
        throw new Error()
      }
    } catch (error) {
      Alert.alert('Error location')
    }
  }

  const renderBtnMyLocation = () => {
    return (
      <Pressable
        style={{
          position: 'absolute',
          bottom: '14%',
          right: 20,
        }}
        onPress={() => void handleGetMyLocation()}
      >
        <Box
          backgroundColor="white"
          padding={10}
          shadowColor="#000000"
          shadowOffset={{
            width: 0,
            height: 2,
          }}
          shadowOpacity={0.17}
          shadowRadius={2.54}
          elevation={3}
          borderRadius={100}
        >
          <MyLocationIcon />
        </Box>
      </Pressable>
    )
  }

  const handleConfirmLocation = () => {
    navigaton.navigate('AddressForm', {
      addressItem: currentAddress,
    })
  }

  const renderBtnConfirmLocation = () => {
    return (
      <Box position="absolute" bottom="5%" left={sizes.horizontal} right={sizes.horizontal}>
        <ButtonOpacity
          backgroundColor="#000"
          textColor="white"
          title="Confirm this pin"
          onPress={handleConfirmLocation}
        />
      </Box>
    )
  }

  const renderLoading = () => {
    if (!loading) return null

    return <LoadingOverlay />
  }

  return (
    <Box flex={1}>
      {renderHeader()}
      {renderBtnConfirmLocation()}
      {renderViewMap()}
      {renderTextAddress()}
      {renderBtnMyLocation()}
      {renderBtnConfirmLocation()}

      {renderLoading()}
    </Box>
  )
}

export default PickLocation

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
