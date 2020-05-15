import React from 'react'
import { useFormikContext } from 'formik'

import { AppPicker } from './AppTextInput'
import { ErrorMessage } from './ErrorMessage'

export const AppFormPicker = ({ items, name, placeholder, ...rest }) => {
  const { values, errors, touched, setFieldValue } = useFormikContext()

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visibility={touched[name]} />
    </>
  )
}
