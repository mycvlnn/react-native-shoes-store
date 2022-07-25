import { AxiosError, AxiosRequestConfig } from 'axios'
import { config, httpRequest, SIGN_IN } from '~/configs'
import { IResponseBase, SignIn, SignInResponse } from '../models'

export const signIn: (
  signInData: SignIn,
  config?: AxiosRequestConfig,
) => Promise<IResponseBase<SignInResponse>> = async (signInData) => {
  try {
    const response = await httpRequest().post<IResponseBase<SignInResponse>>(
      SIGN_IN,
      signInData,
      config,
    )

    return response.data
  } catch (error) {
    const err = error as AxiosError<IResponseBase<SignInResponse>>

    if (err.response?.data) {
      return {
        statusCode: err.response.status,
        message: err.response.data.message,
      }
    }

    return err
  }
}
