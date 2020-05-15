import React from 'react'
import { StyleSheet } from 'react-native'

import { AppText } from './AppText'
import { palette } from '../config'

export const ErrorMessage = ({ error, visibility }) => {
  if (!error || !visibility) return null
  return <AppText style={styles.error}>{error}</AppText>
}

const styles = StyleSheet.create({
  error: {
    color: palette.danger,
  },
})
