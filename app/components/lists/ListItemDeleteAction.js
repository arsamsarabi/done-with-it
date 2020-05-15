import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { palette } from '../../config'

export const ListItemDeleteAction = ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <MaterialCommunityIcons name="trash-can-outline" color={palette.snow} size={32} />
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.danger,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
