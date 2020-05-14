import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { AppText, ListItem } from '../components'
import { Palette } from '../config'

export const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMethod="resize"
        style={styles.image}
        source={require('../assets/images/dummy/gameboy.jpg')}
      />
      <View style={styles.info}>
        <AppText style={styles.title}>Amazing Gameboy</AppText>
        <AppText style={styles.price}>£69.99</AppText>
      </View>
      <View style={styles.user}>
        <ListItem
          image={require('../assets/images/dummy/thispersondoesnotexist.jpg')}
          title="Isabelle Ringing"
          subTitle="7 Listings"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 300,
  },
  info: {
    padding: 12,
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
  },
  price: {
    color: Palette.primary,
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 20,
  },
  user: {
    marginVertical: 40,
  },
})
