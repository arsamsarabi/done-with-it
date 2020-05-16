import React, { useState, useRef } from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Text } from '../Text'
import { palette } from '../../config'
import { ListActionRenderer } from './ListActionRenderer'

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
  const swipableEl = useRef(null)
  const onChevronRightPress = () => {
    swipableEl.current.openRight()
  }
  return (
    <Swipeable
      renderRightActions={(progress) => (
        <ListActionRenderer progress={progress} actions={rightActions} swipableRef={swipableEl} />
      )}
      onSwipeableRightWillOpen={() => setRightActionsOpen(true)}
      onSwipeableWillClose={() => setRightActionsOpen(false)}
      ref={swipableEl}
    >
      <TouchableHighlight underlayColor={palette.lightGrey} onPress={onPress}>
        <View
          style={[
            styles.container,
            {
              paddingRight: showChevronRight ? 0 : 16,
            },
          ]}
        >
          {IconCmponent}
          {image && <Image resizeMethod="resize" source={image} style={styles.image} />}
          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={3}>
                {subTitle}
              </Text>
            )}
          </View>
          {showChevronRight && (
            <TouchableHighlight underlayColor={palette.lightGrey} onPress={onChevronRightPress}>
              <View style={styles.chevron}>
                <MaterialCommunityIcons
                  name={rightActionsOpen ? 'chevron-right' : 'chevron-left'}
                  size={24}
                  color={palette.grey}
                />
              </View>
            </TouchableHighlight>
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
  chevron: {
    height: 72,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
