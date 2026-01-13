import axios from 'axios'

const SDM_URL = import.meta.env.VITE_SDM_URL

const sdm_url = axios.create({
  baseURL: `${SDM_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

sdm_url.defaults.baseURLRoot = SDM_URL

export default sdm_url
