import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Palette } from '../config'

export const ListItemDeleteAction = ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <MaterialCommunityIcons name="trash-can-outline" color={Palette.snow} size={32} />
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.danger,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
