import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import { AppSwitch, AppPicker, AppTextInput } from '../components'

export const TestScreen = () => {
  const [isNew, setIsNew] = useState(false)
  return (
    <View style={styles.container}>
      <AppPicker icon="apps" placeholder="Category" />
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
