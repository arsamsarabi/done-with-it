import React, { useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import { ListItem, Screen, ListItemSeparator, ListItemDeleteAction } from '../components'

const data = [
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
  const [messages, setMessage] = useState(data)
  const [refreshing, setrefreshing] = useState(false)

  const handleDelete = (messageId) => {
    setMessage(messages.filter((message) => message.id !== messageId))
  }

  const handleRefresh = () => {
    setMessage(data)
  }

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
            rightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item.id)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {},
})
