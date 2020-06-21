import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { Image } from 'react-native-expo-image-cache'

import { Text, ListItem } from '../../../components'
import palette from '../../../config/palette'
import ContactForm from './ContactForm'

const ListingDetailsScreen = ({ route }) => {
  const { images, title, price, thumbnailUrl, id } = route.params

  return (
    <>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
        style={styles.container}
      >
        <Image
          uri={images[0].url}
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          tint="light"
        />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.user}>
          <ListItem
            image={require('../../../assets/images/dummy/user4.jpg')}
            title="Isabelle Ringing"
            subTitle="7 Listings"
          />
        </View>
        <ContactForm listingId={id} />
      </KeyboardAvoidingView>
    </>
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
    color: palette.primary,
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 20,
  },
  user: {
    marginVertical: 40,
  },
})

export default ListingDetailsScreen
