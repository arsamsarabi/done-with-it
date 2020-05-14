import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { AppText } from './AppText'
import { Palette } from '../config'

export const IconListItem = ({
  icon,
  iconColor,
  title,
  subTitle,
  onPress,
  rightActions,
  style,
}) => {
  return (
    <Swipeable renderRightActions={rightActions}>
      <TouchableHighlight underlayColor={Palette.lightGrey} onPress={onPress} style={style}>
        <View style={styles.container}>
          <View
            style={[
              styles.icon,
              {
                backgroundColor: iconColor,
              },
            ]}
          >
            <MaterialCommunityIcons name={icon} size={20} color={Palette.snow} />
          </View>
          <View style={styles.info}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle ? <AppText style={styles.subTitle}>{subTitle}</AppText> : null}
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
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
