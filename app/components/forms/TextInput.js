import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { palette, defaultStyles } from '../../config'

const AppTextInput = ({ icon, width = '100%', ...rest }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && <MaterialCommunityIcons name={icon} size={24} color={palette.text} />}
      <TextInput
        placeholderTextColor={palette.grey}
        style={[styles.textInput, defaultStyles.text]}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.lightGrey,
    borderRadius: 12,
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
  },
  textInput: {
    marginLeft: 16,
    flex: 1,
  },
})

export { AppTextInput as TextInput }
