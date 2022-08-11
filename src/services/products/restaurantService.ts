import { AxiosError } from 'axios'
import { GET_ALL_STORE, httpRequest } from '~/configs'
import { IResponseBase, IRestaurant } from '../models'

export const getAllStore: () => Promise<IResponseBase<IRestaurant[]>> = async () => {
  try {
    const response = await httpRequest().get<IResponseBase<IRestaurant[]>>(GET_ALL_STORE, {
      headers: {},
    })

    return response.data
  } catch (error) {
    const err = error as AxiosError

    throw err
  }
}
