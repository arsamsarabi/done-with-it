import FormData from 'form-data'

import api from './client'

const ENDPOINT = '/listings'

const getListings = () => api.get(ENDPOINT)

const postListing = ({ title, price, description, images, location, category }) => {
  const data = new FormData()

  data.append('categoryId', category.value)
  data.append('description', description)
  images.forEach((image) => {
    data.append('images', {
      name: image,
      type: 'image/jpeg',
      uri: image,
    })
  })
  data.append('location', JSON.stringify(location))
  data.append('price', price)
  data.append('title', title)

  return api.post(ENDPOINT, data)
}

export default {
  getListings,
  postListing,
}
