import { AxiosError } from 'axios'
import { CHANGE_PASSWORD, GET_INFO_USER, httpRequest, UPDATE_PROFILE } from '~/configs'
import { STATUS } from '~/constants'
import { IDataUpdateProfile, IResponseBase, IUserProfile } from '../models'

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

export const updateInfoUser: (data: IDataUpdateProfile) => Promise<IResponseBase<string>> = async (
  data: IDataUpdateProfile,
) => {
  try {
    const response = await httpRequest().post<IResponseBase<string>>(UPDATE_PROFILE, data)

    return response.data
  } catch (error) {
    const err = error as AxiosError<IResponseBase<string>>

    if (err.response?.status === STATUS.UNAUTHORIZED || !err.response?.status) {
      return {
        statusCode: STATUS.UNAUTHORIZED,
      }
    }

    if (err.response?.data) {
      return {
        statusCode: err.response.status,
        message: err.response.data.message,
        content: err.response.data.content,
      }
    }

    return err
  }
}

export const changePassword: (newPassword: string) => Promise<IResponseBase<string>> = async (
  newPassword: string,
) => {
  try {
    const response = await httpRequest().post<IResponseBase<string>>(CHANGE_PASSWORD, {
      newPassword,
    })

    return response.data
  } catch (error) {
    const err = error as AxiosError<IResponseBase<string>>

    if (err.response?.status === STATUS.UNAUTHORIZED || !err.response?.status) {
      return {
        statusCode: STATUS.UNAUTHORIZED,
      }
    }

    if (err.response?.data) {
      return {
        statusCode: err.response.status,
        message: err.response.data.message,
        content: err.response.data.content,
      }
    }

    return err
  }
}
