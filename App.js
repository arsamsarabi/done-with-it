import React from 'react'
import { View, StyleSheet } from 'react-native'

import { WelcomeScreen, ListingDetailsScreen } from './app/screens'
import { Palette } from './app/config'

export default App = () => {
  return (
    <View style={styles.container}>
      <ListingDetailsScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Palette.snow,
  },
})
