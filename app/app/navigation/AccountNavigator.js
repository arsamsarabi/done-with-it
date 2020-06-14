import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AccountScreen from '../screens/user/AccountScreen'
import MessagesScreen from '../screens/user/MessagesScreen'
import routes from './routes'

const Stack = createStackNavigator()

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={String(routes.ACCOUNT)} component={AccountScreen} />
    <Stack.Screen name={String(routes.MESSAGES)} component={MessagesScreen} />
  </Stack.Navigator>
)

export default AccountNavigator
