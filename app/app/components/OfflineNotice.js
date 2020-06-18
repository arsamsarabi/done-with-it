import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'

import { Text } from './Text'
import palette from '../config/palette'

const OfflineNotice = () => {
  const netInfo = useNetInfo()

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    )

  return null
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    backgroundColor: palette.danger,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: Constants.statusBarHeight,
  },
  text: {
    color: palette.snow,
  },
})

export default OfflineNotice
