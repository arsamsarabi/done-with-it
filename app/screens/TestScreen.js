import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import { AppSwitch, AppPicker, AppTextInput } from '../components'

const categories = [
  {
    label: 'Furniture',
    value: 1,
  },
  {
    label: 'Clothing',
    value: 2,
  },
  {
    label: 'Gadgets',
    value: 3,
  },
]

export const TestScreen = () => {
  const [isNew, setIsNew] = useState(false)
  return (
    <View style={styles.container}>
      <AppPicker icon="apps" placeholder="Category" items={categories} />
      <AppTextInput icon="email" placeholder="Username" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 64,
  },
})
