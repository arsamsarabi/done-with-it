import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Palette } from '../config'

export const ListItemDeleteAction = () => (
  <View style={styles.container}>
    <MaterialCommunityIcons name="trash-can-outline" color={Palette.snow} size={32} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.danger,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
