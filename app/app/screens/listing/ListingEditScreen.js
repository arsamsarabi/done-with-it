import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import {
  Screen,
  FormField,
  SubmitButton,
  Form,
  FormPicker,
  CategoryPickerItem,
  FormImagePicker,
} from '../../components'
import useUserLocation from '../../hooks/useUserLocation'
import listingsApi from '../../api/listings'
import UploadScreen from './UploadScreen'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(99999).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image'),
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

const ListingEditScreen = () => {
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const { location } = useUserLocation()

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0)
    setUploadVisible(true)
    const result = await listingsApi.addListing({ ...listing, location }, (progress) =>
      setProgress(progress),
    )

    if (!result.ok) {
      setUploadVisible(false)
      return alert('Could not save the listing.')
    }

    resetForm()
  }

  return (
    <Screen paddingHorizontal={16}>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField name="title" maxLength={255} placeholder="Title" />
        <FormField
          name="price"
          placeholder="Price"
          maxLength={8}
          keyboardType="numeric"
          width={152}
        />
        <FormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="75%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />
        <FormField
          name="description"
          maxLength={255}
          placeholder="Description"
          multiline
          numberOfLines={3}
        />
        <SubmitButton style={styles.saveButton} title="Save" />
      </Form>

      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
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

export default ListingEditScreen
