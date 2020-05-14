import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import { ListItem, Screen, ListItemSeparator, ListItemDeleteAction } from '../components'

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/images/dummy/user1.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/images/dummy/user2.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/images/dummy/user3.jpg'),
  },
  {
    id: 4,
    title: 'T4',
    description: 'D4',
    image: require('../assets/images/dummy/user4.jpg'),
  },
]

export const MessagesScreen = () => {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message Selected', item)}
            rightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {},
})
