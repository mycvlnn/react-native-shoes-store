import { AxiosError } from 'axios'
import { GET_DETAIL_PRODUCT, GET_PRODUCT_BY_CATEGORY_ID, httpRequest } from '~/configs'
import { IProductDetail, IResponseBase } from '../models'

export const getDetailProductApi: (
  id: string | number,
) => Promise<IResponseBase<IProductDetail>> = async (id: string | number) => {
  try {
    const params = {
      id,
    }

    const response = await httpRequest().get<IResponseBase<IProductDetail>>(GET_DETAIL_PRODUCT, {
      params,
      headers: {},
    })

    return response.data
  } catch (error) {
    const err = error as AxiosError

    throw err
  }
}

export const getProductByCategoryId: (
  id: string,
) => Promise<IResponseBase<IProductDetail[]>> = async (id: string) => {
  try {
    const params = {
      categoryId: id,
    }

    const response = await httpRequest().get<IResponseBase<IProductDetail[]>>(
      GET_PRODUCT_BY_CATEGORY_ID,
      {
        params,
        headers: {},
      },
    )

    return response.data
  } catch (error) {
    const err = error as AxiosError

    throw err
  }
}
