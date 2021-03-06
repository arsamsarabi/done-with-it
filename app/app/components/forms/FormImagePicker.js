import React from 'react'
import { useFormikContext } from 'formik'

import { ImageInputList } from './ImageInputList'
import { ErrorMessage } from './ErrorMessage'

export const FormImagePicker = ({ name }) => {
  const { values, errors, touched, setFieldValue } = useFormikContext()
  const imageUris = values[name]

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri])
  }

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUir) => imageUir !== uri),
    )
  }

  return (
    <>
      <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
      <ErrorMessage error={errors[name]} visibility={touched[name]} />
    </>
  )
}
