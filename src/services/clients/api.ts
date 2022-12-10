/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosInstance } from 'axios'

const interceptedAxios = (instance: AxiosInstance): AxiosInstance => {
  instance.defaults.timeout = 20000

  instance.interceptors.request.use(
    request => request,
    (error: AxiosError) => Promise.reject(error)
  )

  instance.interceptors.response.use(
    response => response,
    (error: AxiosError) => Promise.reject(error)
  )

  return instance
}

const api = interceptedAxios(axios.create())

export { api }
