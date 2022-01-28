import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const xblApi = Axios.create({
  baseURL: 'https://xapi.us/v2/',
  timeout: 8000
})

export const steamApi = Axios.create({
  // NOTE we can swap out the steam interface to access different data
  baseURL: 'http://api.steampowered.com/',
  timeout: 8000
})
