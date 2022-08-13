import { AxiosError, AxiosRequestConfig } from 'axios'
import { config, GET_CATEGORY, GET_PRODUCT_BY_CATEGORY_ID, httpRequest } from '~/configs'
import { ICategory, IProductDetail, IResponseBase } from '../models'

// TODO
// export const getDetailProduct: (
//   config?: AxiosRequestConfig,
// ) => Promise<IResponseBase<ICategory>> = async () => {
//   try {
//     const response = await httpRequest().get<IResponseBase<ICategory>>(GET_CATEGORY, config)

//     return response.data
//   } catch (error) {
//     const err = error as AxiosError

//     throw err
//   }
// }

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
