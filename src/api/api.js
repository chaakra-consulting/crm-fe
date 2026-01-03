import axios from 'axios'

const API_ROOT = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL: `${API_ROOT}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

api.defaults.baseURLRoot = API_ROOT

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
