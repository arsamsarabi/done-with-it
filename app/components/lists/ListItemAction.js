import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { palette } from '../../config'

export const ListItemAction = ({ onPress, icon, color }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.container, { backgroundColor: color }]}>
      <MaterialCommunityIcons name={icon} color={palette.snow} size={32} />
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  container: {
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
