import React, { useState } from 'react'

import { ListingEditScreen } from './app/screens'
import { Screen, ImageInputList } from './app/components'

export default App = () => {
  const [imageUris, setImageUris] = useState([])

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri])
  }

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUir) => imageUir !== uri))
  }

  return (
    <Screen>
      <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
    </Screen>
  )
}
