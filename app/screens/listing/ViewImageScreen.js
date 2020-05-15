import React from 'react'
import { StyleSheet, View, Image, StatusBar, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { palette } from '../../config'

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.actionBar}>
        <MaterialCommunityIcons name="trash-can-outline" color={palette.snow} size={24} />
        <MaterialCommunityIcons name="close" color={palette.snow} size={24} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.productImage}
        source={require('../../assets/images/plant.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: palette.black,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 16 : 48,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  actionBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
})
