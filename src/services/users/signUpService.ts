import { AxiosError, AxiosRequestConfig } from 'axios'
import { config, SIGN_UP, httpRequest } from '~/configs'
import { IResponseBase, SignUp } from '../models'

export const signUp: (
  signUpData: SignUp,
  config?: AxiosRequestConfig,
) => Promise<IResponseBase<SignUp>> = async (signUpData) => {
  try {
    const response = await httpRequest().post<IResponseBase<SignUp>>(SIGN_UP, signUpData, config)

    return response.data
  } catch (error) {
    const err = error as AxiosError<IResponseBase<SignUp>>

    if (err.response?.data) {
      return {
        statusCode: err.response.status,
        message: err.response.data.message,
      }
    }

    return err
  }
}
