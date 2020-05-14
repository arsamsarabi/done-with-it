import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, StatusBar, Platform } from 'react-native'

import { Palette } from '../utils'

export const WelcomeScreen = () => {
  return (
    <ImageBackground style={styles.container} source={require('../../assets/images/bedroom.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/icon.png')}
          blurRadius={0}
          fadeDuration={500}
          style={styles.logo}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.placeholderRed} />
      <View style={styles.placeholderGreen} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 35,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
  },
  placeholderGreen: {
    width: '100%',
    height: 75,
    backgroundColor: Palette.green,
  },
  placeholderRed: {
    width: '100%',
    height: 75,
    backgroundColor: Palette.red,
  },
})
