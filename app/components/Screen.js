import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { palette } from '../config'

export const Screen = ({ children, style }) => (
  <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
)

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight + 16,
    paddingBottom: 16,
    flex: 1,
    width: '100%',
    backgroundColor: palette.snow,
  },
})
