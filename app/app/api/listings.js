import api from './client'

const ENDPOINT = '/listings'

const getListings = () => api.get(ENDPOINT)

export default {
  getListings,
}
