import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from '../screens/listing/ListingEditScreen'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import palette from '../config/palette'
import NewListingButton from './NewListingButton'
import routes from './routes'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: palette.primary,
      activeTintColor: palette.snow,
      inactiveBackgroundColor: palette.lightGrey,
      inactiveTintColor: palette.text,
    }}
  >
    <Tab.Screen
      name={String(routes.FEED)}
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={String(routes.LISTING_EDIT)}
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: (props) => (
          <NewListingButton {...props} onPress={() => navigation.navigate(routes.LISTING_EDIT)} />
        ),
      })}
    />
    <Tab.Screen
      name={String(routes.ACCOUNT)}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default AppNavigator
