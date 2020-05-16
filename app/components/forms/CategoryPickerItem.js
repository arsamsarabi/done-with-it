import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { AppText } from '../AppText'
import { Icon } from '../Icon'

export const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon name={item.icon} bgColor={item.color} size={64} />
      <AppText style={styles.text}>{item.label}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '33%',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  text: {
    marginTop: 8,
  },
})
