import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { palette, defaultStyles } from '../config'

export const AppTextInput = ({ icon, ...rest }) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={24} color={palette.text} />}
      <TextInput style={[styles.textInput, defaultStyles.text]} {...rest} />
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
  textInput: {
    marginLeft: 16,
    flex: 1,
  },
})
