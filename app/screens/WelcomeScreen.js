import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, StatusBar, Platform } from 'react-native'

import { Palette } from '../utils'

export const WelcomeScreen = () => {
  return (
    <ImageBackground style={styles.background} source={require('../assets/images/bedroom.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          blurRadius={0}
          fadeDuration={500}
          style={styles.logo}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={[styles.button, styles.loginButton]} />
      <View style={[styles.button, styles.registerButton]} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 35 : 65,
  },
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    width: '100%',
    height: 70,
  },
  loginButton: {
    backgroundColor: Palette.green,
  },
  registerButton: {
    backgroundColor: Palette.red,
  },
})
