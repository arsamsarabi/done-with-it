import React from 'react'
import { useFormikContext } from 'formik'

import { Button } from '../Button'

export const SubmitButton = ({ title, style }) => {
  const { handleSubmit } = useFormikContext()
  return <Button style={style} title={title} onPress={handleSubmit} />
}
