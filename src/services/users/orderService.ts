import { AxiosError } from 'axios'
import { httpRequest, ORDER_ITEM } from '~/configs'
import { IResponseBase, IOrder } from '../models'

export const orderItem: (dataOrder: IOrder) => Promise<IResponseBase<string>> = async (
  dataOrder,
) => {
  try {
    const response = await httpRequest().post<IResponseBase<string>>(ORDER_ITEM, dataOrder, {
      headers: {},
    })

    return response.data
  } catch (error) {
    const err = error as AxiosError<IResponseBase<string>>

    if (err.response?.data) {
      return {
        statusCode: err.response.status,
        message: err.response.data.message,
      }
    }

    return err
  }
}
