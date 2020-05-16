import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { Text } from '../Text'

export const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 16,
  },
})
