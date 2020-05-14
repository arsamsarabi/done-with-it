import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { AppText } from './AppText'
import { Palette } from '../config'

export const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image resizeMethod="resize" source={image} style={styles.image} />
      <View style={styles.info}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  info: {},
  title: {},
  subTitle: {},
})
