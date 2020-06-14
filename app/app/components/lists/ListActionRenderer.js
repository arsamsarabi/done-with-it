import React from 'react'
import { View } from 'react-native'

import { ListItemAction } from './ListItemAction'

export const ListActionRenderer = ({ actions, actionWidth = 72, progress, swipableRef }) => {
  return (
    <View style={{ width: actions.length * actionWidth, flexDirection: 'row' }}>
      {actions.map(({ onPress, icon, color }, index) => {
        const trans = progress.interpolate({
          inputRange: [0, 1],
          outputRange: [(actions.length - index) * actionWidth, 0],
        })

        return (
          <ListItemAction
            key={color.toString()}
            onPress={() => {
              onPress()
              swipableRef.current.close()
            }}
            icon={icon}
            color={color}
            trans={trans}
          />
        )
      })}
    </View>
  )
}
