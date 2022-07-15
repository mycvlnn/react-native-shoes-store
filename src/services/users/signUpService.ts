import { AxiosError, AxiosRequestConfig } from 'axios'
import { config, SIGN_UP, httpRequest } from '~/configs'
import { SignUp, SignUpResponse } from '../types'

export const signUp: (
  signUpData: SignUp,
  config?: AxiosRequestConfig,
) => Promise<SignUpResponse> = async (signUpData) => {
  try {
    const response = await httpRequest().post<SignUpResponse>(SIGN_UP, signUpData, config)

    return response.data
  } catch (error) {
    const err = error as AxiosError<SignUpResponse>

    if (err.response?.data) {
      return {
        statusCode: err.response.status,
        message: err.response.data.message,
      }
    }

    return err
  }
}
