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
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  info: {
    marginLeft: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 16,
    color: Palette.grey,
  },
})
