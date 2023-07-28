import axios from 'axios'

import { isServer } from '@/functions'

let AUTH_TOKEN = undefined

if (!isServer) {
}

export const baseURL = (process.env.API_URL || 'http://localhost:3000') + '/api'

axios.defaults.baseURL = baseURL
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

export { axios }
