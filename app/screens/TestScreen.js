import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Card } from '../components'

export const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Card
        image={require('../assets/images/dummy/psp.jpg')}
        title="Retro Playstation Portable"
        subTitle="£99.99"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
})
