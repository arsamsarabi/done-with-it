import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { AppText } from '../AppText'
import { palette } from '../../config'

export const ListItem = ({ image, title, subTitle, onPress, rightActions, IconCmponent }) => {
  return (
    <Swipeable renderRightActions={rightActions}>
      <TouchableHighlight underlayColor={palette.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {IconCmponent}
          {image && <Image resizeMethod="resize" source={image} style={styles.image} />}
          <View style={styles.info}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: palette.white,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  info: {
    marginLeft: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 16,
    color: palette.grey,
  },
})
