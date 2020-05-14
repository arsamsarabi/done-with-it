import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { AppText } from './AppText'
import { Palette } from '../config'

export const Card = ({ image, title, subTitle }) => {
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
    borderRadius: 16,
    backgroundColor: Palette.white,
    elevation: 5,
    shadowColor: Palette.lightGrey,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 5,
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  info: {
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: Palette.primary,
    marginTop: 8,
  },
})
