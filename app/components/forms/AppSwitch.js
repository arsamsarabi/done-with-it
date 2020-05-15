import React from 'react'
import { Switch, StyleSheet } from 'react-native'

export const AppSwitch = ({ style, ...rest }) => {
  return <Switch style={styles.switch} {...rest} />
}

const styles = StyleSheet.create({
  switch: {},
})
