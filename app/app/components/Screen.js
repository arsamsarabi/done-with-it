import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import palette from '../config/palette'

export const Screen = ({ children, style, paddingHorizontal = 0 }) => (
  <SafeAreaView style={[styles.screen, style]}>
    <View style={[styles.innerView, { paddingHorizontal }]}>{children}</View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight + 16,
    flex: 1,
    width: '100%',
    backgroundColor: palette.snow,
  },
  innerView: {
    flex: 1,
    width: '100%',
    paddingBottom: 8,
  },
})
