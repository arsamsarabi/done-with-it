import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'

export const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {/* HACK: (style={style}) SafeAreaView does not take horizontal padding*/}
      <View style={style}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight + 16,
    flex: 1,
    width: '100%',
  },
})
