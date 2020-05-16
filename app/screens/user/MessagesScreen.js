import React, { useState } from 'react'
import { FlatList } from 'react-native'

import { ListItem, Screen, ListItemSeparator } from '../../components'
import { palette } from '../../config'

const data = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../../assets/images/dummy/user1.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../../assets/images/dummy/user2.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../../assets/images/dummy/user3.jpg'),
  },
  {
    id: 4,
    title: 'T4',
    description: 'D4',
    image: require('../../assets/images/dummy/user4.jpg'),
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
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message Selected', item)}
            rightActions={[
              {
                onPress: () => console.log('delete', item),
                icon: 'trash-can-outline',
                color: palette.danger,
              },
              {
                onPress: () => console.log('mark as read', item),
                icon: 'check-all',
                color: palette.success,
              },
              {
                onPress: () => console.log('flag', item),
                icon: 'flag-variant',
                color: palette.alert,
              },
            ]}
            showChevronRight
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </Screen>
  )
}
