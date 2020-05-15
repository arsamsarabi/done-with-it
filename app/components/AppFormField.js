import React from 'react'
import { useFormikContext } from 'formik'

import { AppTextInput } from './AppTextInput'
import { ErrorMessage } from './ErrorMessage'

export const AppFormField = ({ name, ...rest }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext()

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visibility={touched[name]} />
    </>
  )
}
