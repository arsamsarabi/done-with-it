import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { Screen, Card } from '../components'

const data = [
  {
    id: 1,
    image: require('../assets/images/dummy/gameboy.jpg'),
    title: 'Handheld GameBoy',
    price: '£120',
  },
  {
    id: 2,
    image: require('../assets/images/dummy/lense.jpg'),
    title: 'Super cool lense',
    price: '£294.99',
  },
  {
    id: 3,
    image: require('../assets/images/dummy/psp.jpg'),
    title: 'Retro PlayStation Portable',
    price: '£85',
  },
  {
    id: 4,
    image: require('../assets/images/dummy/vr.jpg'),
    title: 'Virtual Reality headset',
    price: '£289.99',
  },
]

export const ListingsScreen = () => {
  return (
    <Screen>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, image, title, price } }) => (
          <View style={styles.cardContainer}>
            <Card key={id} image={image} title={title} subTitle={price} />
          </View>
        )}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 32,
  },
})
