import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ListingsScreen from '../screens/listing/ListingsScreen'
import ListingDetailsScreen from '../screens/listing/ListingDetailsScreen'
import routes from './routes'

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={String(routes.LISTING)} component={ListingsScreen} />
    <Stack.Screen name={String(routes.LISTING_DETAILS)} component={ListingDetailsScreen} />
  </Stack.Navigator>
)

export default FeedNavigator
