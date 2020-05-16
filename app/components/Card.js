import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { Text } from './Text'
import { palette } from '../config'

export const Card = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image resizeMethod="resize" source={image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: palette.white,
    elevation: 5,
    shadowColor: palette.lightGrey,
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
    color: palette.primary,
    marginTop: 8,
  },
})
