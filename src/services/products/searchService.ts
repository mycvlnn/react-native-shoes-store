import { AxiosError } from 'axios'
import { httpRequest, SEARCH_PRODUCT } from '~/configs'
import { IProductDetail, IResponseBase } from '../models'

export const searchProduct: (keyword: string) => Promise<IResponseBase<IProductDetail[]>> = async (
  keyword: string,
) => {
  try {
    const params = {
      keyword,
    }

    const response = await httpRequest().get<IResponseBase<IProductDetail[]>>(SEARCH_PRODUCT, {
      params,
      headers: {},
    })

    return response.data
  } catch (error) {
    const err = error as AxiosError

    throw err
  }
}
