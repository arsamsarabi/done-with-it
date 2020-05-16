import React from 'react'
import { useFormikContext } from 'formik'

import { AppPicker } from './AppPicker'
import { ErrorMessage } from './ErrorMessage'

export const AppFormPicker = ({
  items,
  name,
  placeholder,
  width = '100%',
  PickerItemComponent,
  numberOfColumns,
}) => {
  const { values, errors, touched, setFieldValue } = useFormikContext()

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visibility={touched[name]} />
    </>
  )
}
