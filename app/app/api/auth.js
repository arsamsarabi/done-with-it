import api from './client'

const ENDPOINT = '/auth'

const login = (email, password) => api.post(ENDPOINT, { email, password })

export default {
  login,
}
