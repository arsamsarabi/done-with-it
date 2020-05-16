import React from 'react'
import { StyleSheet, View, ImageBackground, Image, StatusBar, Platform } from 'react-native'

import { Button, Text } from '../components'

export const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/images/bedroom.jpg')}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          blurRadius={0}
          fadeDuration={500}
          style={styles.logo}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.actions}>
        <Button title="Login" />
        <Button title="Register" color="secondary" />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
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
  tagline: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  actions: {
    padding: 24,
  },
})
