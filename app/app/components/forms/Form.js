import React from 'react'
import { Formik } from 'formik'

export const Form = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  )
}
