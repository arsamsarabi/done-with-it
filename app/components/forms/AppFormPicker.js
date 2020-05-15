import React from 'react'
import { useFormikContext } from 'formik'

import { AppPicker } from './AppPicker'
import { ErrorMessage } from './ErrorMessage'

export const AppFormPicker = ({ items, name, placeholder }) => {
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
