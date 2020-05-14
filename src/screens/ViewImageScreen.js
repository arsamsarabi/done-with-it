import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Platform,
} from 'react-native'

import { Palette } from '../utils'

export const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.actionBar}>
        <View style={styles.placeholderRed} />
        <View style={styles.placeholderGreen} />
      </View>
      <ImageBackground
        style={styles.productImage}
        source={require('../../assets/images/plant.jpg')}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.black,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  actionBar: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  placeholderGreen: {
    width: 50,
    height: 50,
    backgroundColor: Palette.green,
  },
  placeholderRed: {
    width: 50,
    height: 50,
    backgroundColor: Palette.red,
  },
  productImage: {
    width: '100%',
    height: '80%',
  },
})
