import React from 'react'
import { StyleSheet, Text, ImageBackground, Image, StatusBar, Platform } from 'react-native'

import { Palette } from '../utils'

export const WelcomeScreen = () => {
  return (
    <ImageBackground style={styles.container} source={require('../../assets/images/bedroom.jpg')}>
      <Image
        source={require('../../assets/icon.png')}
        blurRadius={0}
        fadeDuration={500}
        style={styles.logo}
      />

      <Text>Sell What You Don't Need</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 35,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 150,
    height: 150,
  },
})
