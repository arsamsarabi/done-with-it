import React, { useState } from 'react'

import { ListingEditScreen } from './app/screens'
import { Screen, ImageInput } from './app/components'

export default App = () => {
  const [imageUri, setImageUri] = useState()

  return (
    <Screen>
      <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} />
    </Screen>
  )
}
