import React from 'react'
import { useFormikContext } from 'formik'

import { TextInput } from './TextInput'
import { ErrorMessage } from './ErrorMessage'

export const FormField = ({ name, ...rest }) => {
  const { setFieldValue, values, setFieldTouched, errors, touched } = useFormikContext()

  return (
    <>
      <TextInput
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visibility={touched[name]} />
    </>
  )
}
