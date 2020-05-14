import React from 'react'
import { StyleSheet, View, Image, StatusBar, Platform } from 'react-native'

import { Palette } from '../config'

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.actionBar}>
        <View style={[styles.button, styles.deleteIcon]} />
        <View style={[styles.button, styles.closeIcon]} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.productImage}
          source={require('../assets/images/plant.jpg')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.black,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 16 : 48,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  actionBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    marginBottom: 24,
  },
  button: {
    width: 50,
    height: 50,
  },
  closeIcon: {
    backgroundColor: Palette.green,
  },
  deleteIcon: {
    backgroundColor: Palette.red,
  },
  imageContainer: {
    flex: 1,
    overflow: 'hidden',
    width: '100%',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
})
