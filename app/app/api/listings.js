// import FormData from 'form-data'

import api from './client'

const ENDPOINT = '/listings'

const getListings = () => api.get(ENDPOINT)

const addListing = (
  { title, price, description, images, location, category },
  onUploadProgress,
) => {
  const data = new FormData()

  data.append('title', title)
  data.append('price', price)
  data.append('categoryId', category.value)
  data.append('description', description)

  images.forEach((image, index) => {
    data.append('images', {
      name: `image-${index}-${Math.random() * 100}`,
      type: 'image/jpeg',
      uri: image,
    })
  })

  if (location) {
    data.append('location', JSON.stringify(location))
  }

  return api.post(ENDPOINT, data, {
    onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  })
}

export default {
  addListing,
  getListings,
}
