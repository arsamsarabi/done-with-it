import React from 'react'
import { View, StyleSheet } from 'react-native'

import palette from '../../config/palette'

export const ListItemSeparator = () => <View style={styles.separator} />

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: palette.lightGrey,
  },
})
