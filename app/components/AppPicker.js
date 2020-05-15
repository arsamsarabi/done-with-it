import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { palette, defaultStyles } from '../config'
import { AppText } from './AppText'

export const AppPicker = ({ icon, placeholder, ...rest }) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={24} color={palette.text} />}
      <AppText style={styles.placeholder}>{placeholder}</AppText>
      <MaterialCommunityIcons name="chevron-down" size={20} color={palette.text} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.lightGrey,
    borderRadius: 24,
    flexDirection: 'row',
    width: '100%',
    padding: 16,
    marginVertical: 8,
  },
  placeholder: {
    marginLeft: 16,
    flex: 1,
  },
})
