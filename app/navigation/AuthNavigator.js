import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { WelcomeScreen, LoginScreen, RegisterScreen } from '../screens'
import { palette } from '../config'

const Stack = createStackNavigator()

export const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: palette.primary,
      },
      headerTintColor: palette.snow,
    }}
  >
    <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{
        title: 'Welcome Screen',
        headerShown: false,
      }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
)
