import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { AppText } from '../AppText'
import { palette } from '../../config'

export const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  rightActions,
  IconCmponent,
  showChevronRight = true,
}) => {
  const [rightActionsOpen, setRightActionsOpen] = useState(false)
  return (
    <Swipeable
      renderRightActions={rightActions}
      onSwipeableRightWillOpen={() => setRightActionsOpen(true)}
      onSwipeableWillClose={() => setRightActionsOpen(false)}
    >
      <TouchableHighlight underlayColor={palette.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {IconCmponent}
          {image && <Image resizeMethod="resize" source={image} style={styles.image} />}
          <View style={styles.info}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          {showChevronRight && (
            <View style={styles.chevron}>
              <MaterialCommunityIcons
                name={rightActionsOpen ? 'chevron-right' : 'chevron-left'}
                size={24}
                color={palette.grey}
              />
            </View>
          )}
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
    flex: 1,
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
