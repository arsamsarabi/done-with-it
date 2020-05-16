import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { AppText } from '../AppText'
import { Icon } from '../Icon'

export const PickerIconItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name={item.icon} bgColor={item.color} size={64} />
        <AppText style={styles.text}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 128,
    maxHeight: 144,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  text: {
    textAlign: 'center',
    marginTop: 8,
  },
})
