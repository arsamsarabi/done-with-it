import React from 'react'
import { Animated, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { palette } from '../../config'

export const ListItemAction = ({ onPress, icon, color, trans }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Animated.View
      style={[styles.container, { backgroundColor: color, transform: [{ translateX: trans }] }]}
    >
      <MaterialCommunityIcons name={icon} color={palette.snow} size={32} />
    </Animated.View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  container: {
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
