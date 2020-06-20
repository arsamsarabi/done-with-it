import api from './client'

const ENDPOINT = '/users'

const register = (userInfo) => api.post(ENDPOINT, userInfo)

export default {
  register,
}
