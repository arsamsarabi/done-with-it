import React from 'react'
import { StyleSheet } from 'react-native'

import { Text } from '../Text'
import palette from '../../config/palette'

export const ErrorMessage = ({ error, visibility }) => {
  if (!error || !visibility) return null
  return <Text style={styles.error}>{error}</Text>
}

const styles = StyleSheet.create({
  error: {
    color: palette.danger,
  },
})
