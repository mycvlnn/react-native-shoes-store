import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getInforUser } from '~/store/appUserSlice/selector'

export const BASE_URL = 'https://shop.cyberlearn.vn/api/'

export const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
  timeout: 30000,
}

const axiosInstance: AxiosInstance = axios.create(config)

export const httpRequest = (options?: AxiosRequestConfig) => {
  const { accessToken, localeCode } = getInforUser()

  const defaultConfig: AxiosRequestConfig = {
    headers: {
      'Accept-Language': localeCode || 'en',
      Authorization: `Bearer ${accessToken || ''}`,
    },
    ...options,
  }

  return {
    get: <T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig) =>
      axiosInstance.get<T, R>(url, { ...defaultConfig, ...config }),
    post: <T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>,
    ) => axiosInstance.post<T, R, D>(url, data, { ...defaultConfig, ...config }),
    put: <T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>,
    ) => axiosInstance.put<T, R, D>(url, data, { ...defaultConfig, ...config }),
    delete: <T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      config?: AxiosRequestConfig<D>,
    ) => axiosInstance.delete<T, R, D>(url, { ...defaultConfig, ...config }),
  }
}

export default axiosInstance
