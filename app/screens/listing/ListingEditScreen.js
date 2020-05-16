import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import { Screen, AppFormField, SubmitButton, AppForm, AppFormPicker } from '../../components'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(99999).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
})

const categories = [
  { label: 'Furniture', value: 1, icon: 'sofa', color: '#2bcbba' },
  { label: 'Clothing', value: 2, icon: 'shoe-heel', color: '#FF4081' },
  { label: 'Books', value: 3, icon: 'book-open-page-variant', color: '#fc5c65' },
  { label: 'Electronics', value: 4, icon: 'monitor-speaker', color: '#fed330' },
  { label: 'Home & Kitchen', value: 5, icon: 'home-city', color: '#45aaf2' },
  { label: 'Decorative', value: 6, icon: 'format-paint', color: '#26de81' },
  { label: 'Cars', value: 7, icon: 'car-sports', color: '#4b7bec' },
  { label: 'Sports', value: 8, icon: 'soccer', color: '#fd9644' },
  { label: 'Other', value: 9, icon: 'blur', color: '#7f8c8d' },
]

export const ListingEditScreen = () => {
  return (
    <Screen paddingHorizontal={16}>
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
        <AppFormField
          name="price"
          placeholder="Price"
          maxLength={8}
          keyboardType="numeric"
          width={152}
        />
        <AppFormPicker items={categories} name="category" placeholder="Category" width={196} />
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
