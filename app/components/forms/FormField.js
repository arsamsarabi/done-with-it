import React from 'react'
import { useFormikContext } from 'formik'

import { TextInput } from './TextInput'
import { ErrorMessage } from './ErrorMessage'

export const FormField = ({ name, ...rest }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext()

  return (
    <>
      <TextInput onChangeText={handleChange(name)} onBlur={() => setFieldTouched(name)} {...rest} />
      <ErrorMessage error={errors[name]} visibility={touched[name]} />
    </>
  )
}
