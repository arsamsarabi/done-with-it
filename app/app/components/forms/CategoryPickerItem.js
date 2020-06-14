import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Text } from '../Text'
import { Icon } from '../Icon'

export const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Icon name={item.icon} bgColor={item.color} size={64} />
        <Text style={styles.text}>{item.label}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '33%',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  button: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 8,
  },
})
