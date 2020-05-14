import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Screen, Card } from '../components'

const data = [
  {
    id: 1,
    image: require('../assets/images/dummy/psp.jpg'),
    title: 'Retro PlayStation Portable',
    price: '£85',
  },
  {
    id: 2,
    image: require('../assets/images/dummy/gameboy.jpg'),
    title: 'Handheld GameBoy',
    price: '£120',
  },
  {
    id: 3,
    image: require('../assets/images/dummy/masks.jpg'),
    title: 'Set of 10 Masks',
    price: '£29.99',
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
      {data.map(({ id, image, title, price }) => (
        <Card key={id} image={image} title={title} subTitle={price} />
      ))}
    </Screen>
  )
}

const styles = StyleSheet.create({})
