import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { AppText } from './AppText'

export const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {},
})
