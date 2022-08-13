import { AxiosError, AxiosRequestConfig } from 'axios'
import { config, GET_BANNER, httpRequest } from '~/configs'
import { IBanner } from '~/models'
import { IResponseBase } from '../models'

export const getListBanner: (
  config?: AxiosRequestConfig,
) => Promise<IResponseBase<IBanner[]>> = async () => {
  try {
    const response = await httpRequest().get<IResponseBase<IBanner[]>>(GET_BANNER, config)

    return response.data
  } catch (error) {
    const err = error as AxiosError

    throw err
  }
}
