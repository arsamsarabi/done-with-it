import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { Screen, ListItemDeleteAction, ListItemSeparator, ListItem } from '../components'

const data = [
  {
    id: 1,
    title:
      'Et doloremque nihil rerum ea repellendus aut consequatur facilis. In aut quasi facilis perspiciatis consequatur sit commodi. Nesciunt dolores et ducimus fugit.',
    description:
      'Et quia dolorum ut fugiat magni autem. Repellat iure perspiciatis est ut blanditiis nulla harum voluptas officia. Aut voluptas iure. \n Molestiae et earum. Facilis velit maiores autem aspernatur animi quidem suscipit ad magni. Earum odit neque doloremque consequuntur alias. \nDolor est iure beatae dolore sunt minima dicta nemo ratione. Culpa ullam magnam molestias qui. Ducimus hic culpa. Et accusantium molestiae consequatur molestiae et.',
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

export const TestScreen = () => {
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
            rightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item.id)} />}
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

const styles = StyleSheet.create({})
