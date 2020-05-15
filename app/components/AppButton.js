import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { palette } from '../config'
import { AppText } from './AppText'

export const AppButton = ({ title, color = 'primary', onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: palette[color] }]}
      activeOpacity={0.75}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: palette.secondary,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    marginVertical: 8,
  },
  text: {
    textTransform: 'uppercase',
    color: palette.snow,
    fontWeight: 'bold',
    fontSize: 16,
  },
})
