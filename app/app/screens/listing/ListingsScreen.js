import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { Screen, Card } from '../../components'
import routes from '../../navigation/routes'

const data = [
  {
    id: '1',
    images: [require('../../assets/images/dummy/gameboy.jpg')],
    title: 'Handheld GameBoy',
    price: '£120',
  },
  {
    id: '2',
    images: [require('../../assets/images/dummy/lense.jpg')],
    title: 'Super cool lense',
    price: '£294.99',
  },
  {
    id: '3',
    images: [require('../../assets/images/dummy/psp.jpg')],
    title: 'Retro PlayStation Portable',
    price: '£85',
  },
  {
    id: '4',
    images: [require('../../assets/images/dummy/vr.jpg')],
    title: 'Virtual Reality headset',
    price: '£289.99',
  },
]

const ListingsScreen = ({ navigation }) => {
  return (
    <Screen>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, item: { id, images, title, price } }) => (
          <View style={styles.cardContainer}>
            <Card
              key={id}
              image={images[0]}
              title={title}
              subTitle={price}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
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

export default ListingsScreen
