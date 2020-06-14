import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { Screen, Card, Text, Button } from '../../components'
import routes from '../../navigation/routes'
import listingsApi from '../../api/listings'
import palette from '../../config/palette'

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([])
  const [hasError, setHasError] = useState([])

  const loadListings = async () => {
    const response = await listingsApi.getListings()
    if (!response.ok) return setHasError(true)

    setHasError(false)
    setListings(response.data)
  }

  useEffect(() => {
    loadListings()
  }, [])

  return (
    <Screen>
      {hasError && (
        <View style={styles.errorWrapper}>
          <Text style={styles.errorMessage}>Couldn't retieve the listings.</Text>
          <Button title="Retry" onPress={loadListings} />
        </View>
      )}
      <FlatList
        data={listings}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, item: { id, images, title, price } }) => (
          <View style={styles.cardContainer}>
            <Card
              key={id}
              imageUrl={images[0].url}
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
  errorWrapper: {
    paddingHorizontal: 32,
    paddingTop: 32,
  },
  errorMessage: {
    color: palette.danger,
    fontSize: 20,
    marginBottom: 16,
  },
})

export default ListingsScreen
