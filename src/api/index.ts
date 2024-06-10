import Axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL_API
const instanceAxios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
})
export default instanceAxios



