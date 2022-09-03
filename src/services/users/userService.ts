import { AxiosError } from 'axios'
import { GET_INFO_USER, httpRequest } from '~/configs'
import { STATUS } from '~/constants'
import { IResponseBase, IUserProfile } from '../models'

export const getInfoUser: () => Promise<IResponseBase<IUserProfile>> = async () => {
  try {
    const response = await httpRequest().post<IResponseBase<IUserProfile>>(GET_INFO_USER)

    return response.data
  } catch (error) {
    const err = error as AxiosError

    if (err.response?.status === STATUS.UNAUTHORIZED || !err.response?.status) {
      return {
        statusCode: STATUS.UNAUTHORIZED,
      }
    }

    throw err
  }
}
