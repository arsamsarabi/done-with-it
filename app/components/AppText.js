import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

import { Palette } from '../config'

export const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: Palette.text,
  },
})
