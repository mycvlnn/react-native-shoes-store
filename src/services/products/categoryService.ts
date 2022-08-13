import { AxiosError, AxiosRequestConfig } from 'axios'
import { config, GET_CATEGORY, httpRequest } from '~/configs'
import { ICategory, IResponseBase } from '../models'

export const getAllCategory: (
  config?: AxiosRequestConfig,
) => Promise<IResponseBase<ICategory[]>> = async () => {
  try {
    const response = await httpRequest().get<IResponseBase<ICategory[]>>(GET_CATEGORY, config)

    return response.data
  } catch (error) {
    const err = error as AxiosError

    throw err
  }
}
