import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

import { AppTextInput } from '../components'

export const TestScreen = () => {
  const [firstName, setFirstName] = useState('')
  return (
    <View style={styles.container}>
      <AppTextInput icon="email" placeholder="Username" clearButtonMode="while-editing" />
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
