import { nanoid } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { LatLng } from 'react-native-maps'
import {
  httpRequest,
  APP_BASE_URL,
  GET_GEOMETRY_LOCATE,
  GET_AUTO_COMPLETE_ADDRESS,
  GET_ADDRESS_BY_GEOCODING,
} from '~/configs'
import { STATUS } from '~/constants'
import { IAddressItem } from '~/models'
import { IGoogleAutoCompleteAddress, IGoogleGeometryLocate, IResponseBase } from '../models'

// API lấy danh sách 5 địa chỉ theo keyword search
export const getAutoCompleteAddress: (
  keyword: string,
) => Promise<IResponseBase<IAddressItem[]>> = async (keyword = '') => {
  try {
    const response = await httpRequest({ baseURL: APP_BASE_URL }).get<IGoogleAutoCompleteAddress>(
      GET_AUTO_COMPLETE_ADDRESS,
      { params: { keyword } },
    )

    if (response.status === STATUS.SUCCESS_NUM) {
      return {
        statusCode: STATUS.SUCCESS_NUM,
        content: response.data.predictions.map((item) => {
          return {
            id: `${Date.now()}_${nanoid()}`,
            description: item.description,
          }
        }),
      }
    }

    return {
      statusCode: response.status,
      message: response.statusText,
      content: [],
    }
  } catch (error) {
    const err = error as AxiosError

    throw err
  }
}

// Từ địa chỉ đã biết là string => lấy được thông tin chi tiết lat long thông qua api này
export const getGeometryLocation: (
  address: string,
) => Promise<IResponseBase<IAddressItem>> = async (address = '') => {
  try {
    const response = await httpRequest({ baseURL: APP_BASE_URL }).get<IGoogleGeometryLocate>(
      GET_GEOMETRY_LOCATE,
      { params: { address } },
    )

    const { status } = response.data

    if (response.status === STATUS.SUCCESS_NUM && status === STATUS.OK_TEXT) {
      const { results } = response.data
      const dataAddress = results[0]

      return {
        content: {
          description: dataAddress.formatted_address,
          id: `${Date.now()}_${nanoid()}`,
          lat: dataAddress.geometry.location.lat,
          long: dataAddress.geometry.location.lng,
        },
        statusCode: response.status,
      }
    }

    return {
      statusCode: response.status,
      message: response.statusText,
    }
  } catch (error) {
    const err = error as AxiosError

    throw err
  }
}

// Hàm tìm kiếmm địa chỉ thông qua qua lat long
export const getAddressByGeocoding: (
  coordinate: LatLng,
) => Promise<IResponseBase<IAddressItem[]>> = async ({ latitude, longitude }) => {
  try {
    const response = await httpRequest({ baseURL: APP_BASE_URL }).get<IGoogleGeometryLocate>(
      GET_ADDRESS_BY_GEOCODING,
      { params: { lat: latitude, long: longitude } },
    )
    if (response.status === STATUS.SUCCESS_NUM) {
      const { results } = response.data

      return {
        statusCode: response.status,
        content: results.map((item) => {
          return {
            id: `${Date.now()}_${nanoid()}`,
            lat: item.geometry.location.lat,
            long: item.geometry.location.lng,
            description: item.formatted_address,
          }
        }),
      }
    }

    return {
      statusCode: response.status,
    }
  } catch (error) {
    const err = error as AxiosError

    throw err
  }
}
