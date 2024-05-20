import axios, { AxiosInstance } from 'axios'

const options = {
  baseURL: 'https://data.messari.io/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

const messariClient = (): AxiosInstance => axios.create(options)

export default messariClient
