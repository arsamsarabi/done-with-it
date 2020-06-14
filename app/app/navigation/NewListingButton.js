import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import palette from '../config/palette'

const NewListingButton = (props) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus" size={40} color={palette.white} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.primary,
    borderWidth: 8,
    borderColor: palette.snow,
    width: 80,
    height: 80,
    borderRadius: 40,
    bottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default NewListingButton
