import React from 'react'
import { StyleSheet, Text, SafeAreaView, Image, Platform, StatusBar } from 'react-native'

import { Palette } from './src/utils'

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/icon.png')}
        blurRadius={0}
        fadeDuration={1000}
        style={styles.logo}
      />

      <Text>Done With It ♻️</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
})
