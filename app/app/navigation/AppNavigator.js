import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from '../screens/listing/ListingEditScreen'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import palette from '../config/palette'
import NewListingButton from './NewListingButton'
import routes from './routes'
import useNotifications from '../hooks/useNotifications'

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  useNotifications()

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: palette.primary,
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
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="plus-circle" size={size} color={color} />
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
}

export default AppNavigator
