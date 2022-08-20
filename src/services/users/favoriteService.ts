import { AxiosError } from 'axios'
import {
  FAVORITE_PRODUCT_ITEM,
  GET_LIST_PRODUCT_FAVORITE,
  httpRequest,
  UNFAVORITE_PRODUCT_ITEM,
} from '~/configs'
import { STATUS } from '~/constants'
import { IDataProductFavorite, IResponseBase } from '../models'

export const getListProductFavorite: () => Promise<
  IResponseBase<IDataProductFavorite>
> = async () => {
  try {
    const response = await httpRequest().get<IResponseBase<IDataProductFavorite>>(
      GET_LIST_PRODUCT_FAVORITE,
    )

    return response.data
  } catch (error) {
    const err = error as AxiosError

    throw err
  }
}

// Hàm kiểm tra một sản phẩm đã được yêu thích hay chưa
export const checkFavoriteProductById: (id: string | number) => Promise<boolean> = async (
  id: string | number,
) => {
  try {
    const { content, statusCode } = await getListProductFavorite()

    if (statusCode === STATUS.SUCCESS_NUM) {
      const doesExist = content?.productsFavorite.some((product) => product.id === id)
      return doesExist || false
    } else {
      return false
    }
  } catch (error) {
    return false
  }
}

// Hàm favorite | unfavorite  một product item
export const toogleFavoriteProductItem: (
  id: string | number,
  isLike: boolean,
) => Promise<IResponseBase<string>> = async (id: string | number, isLike: boolean) => {
  try {
    const params = {
      productId: id,
    }

    const url = isLike ? FAVORITE_PRODUCT_ITEM : UNFAVORITE_PRODUCT_ITEM

    const response = await httpRequest().get<IResponseBase<string>>(url, {
      params,
    })

    return response.data
  } catch (error) {
    const err = error as AxiosError

    throw err
  }
}
