import React from 'react'
import { StyleSheet, TextInput, View, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Palette } from '../config'

export const AppTextInput = ({ icon, ...rest }) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={24} color={Palette.text} />}
      <TextInput style={styles.textInput} {...rest} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.lightGrey,
    borderRadius: 24,
    flexDirection: 'row',
    width: '100%',
    padding: 16,
    marginVertical: 8,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginLeft: 16,
    color: Palette.text,
    flex: 1,
  },
})
