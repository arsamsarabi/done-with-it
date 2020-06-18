import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { Screen, Card, Text, Button } from '../../components'
import ActivityIndicator from '../../components/ActivityIndicator'
import routes from '../../navigation/routes'
import listingsApi from '../../api/listings'
import palette from '../../config/palette'
import useApi from '../../hooks/useApi'

const ListingsScreen = ({ navigation }) => {
  const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings)

  useEffect(() => {
    loadListings()
  }, [])

  return (
    <Screen>
      {error && (
        <View style={styles.errorWrapper}>
          <Text style={styles.errorMessage}>Couldn't retieve the listings.</Text>
          <Button title="Retry" onPress={loadListings} />
        </View>
      )}
      <ActivityIndicator isVisible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, item: { id, images, title, price } }) => (
          <View style={styles.cardContainer}>
            <Card
              key={id}
              imageUrl={images[0].url}
              thumbnailUrl={images[0].thumbnailUrl}
              title={title}
              subTitle={`£${price.toFixed(2)}`}
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
