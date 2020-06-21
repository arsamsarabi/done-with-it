import api from './client'

const ENDPOINT = '/messages'

const send = (message, listingId) => api.post(ENDPOINT, { message, listingId })

export default {
  send,
}
