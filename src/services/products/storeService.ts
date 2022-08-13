import { AxiosError } from 'axios'
import { GET_ALL_STORE, httpRequest } from '~/configs'
import { IResponseBase, IStore } from '../models'

export const getAllStore: () => Promise<IResponseBase<IStore[]>> = async () => {
  try {
    const response = await httpRequest().get<IResponseBase<IStore[]>>(GET_ALL_STORE, {
      headers: {},
    })

    return response.data
  } catch (error) {
    const err = error as AxiosError

    throw err
  }
}
