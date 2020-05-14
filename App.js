import React from 'react'
import { View, StyleSheet } from 'react-native'

import { WelcomeScreen, ViewImageScreen } from './app/screens'

export default App = () => {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
