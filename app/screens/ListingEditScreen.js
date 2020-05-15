import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import { Screen, AppFormField, SubmitButton, AppForm, AppFormPicker } from '../components'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(99999).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
})

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Gadget', value: 3 },
  { label: 'Electronics', value: 4 },
  { label: 'Stationery', value: 5 },
  { label: 'Decorative', value: 6 },
]

export const ListingEditScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log('form submitted', values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" maxLength={255} placeholder="Title" autoFocus />
        <AppFormField name="price" placeholder="Price" maxLength={8} keyboardType="numeric" />
        <AppFormPicker items={categories} name="category" placeholder="Category" />
        <AppFormField
          name="description"
          maxLength={255}
          placeholder="Description"
          multiline
          numberOfLines={3}
        />

        <SubmitButton style={styles.saveButton} title="Save" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginVertical: 40,
  },
  saveButton: {
    marginTop: 32,
  },
})
