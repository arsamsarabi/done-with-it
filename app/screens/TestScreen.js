import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import { AppSwitch } from '../components'

export const TestScreen = () => {
  const [isNew, setIsNew] = useState(false)
  return (
    <View style={styles.container}>
      <AppSwitch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
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
