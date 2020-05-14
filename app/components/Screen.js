import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const Screen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight + 16,
    flex: 1,
    width: '100%',
  },
})
