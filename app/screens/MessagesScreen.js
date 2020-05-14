import React from 'react'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native'

import Constants from 'expo-constants'

import { ListItem } from '../components'

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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem title={item.title} subTitle={item.description} image={item.image} />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: Constants.statusBarHeight,
  },
})
