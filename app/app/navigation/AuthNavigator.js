import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from '../screens/auth/WelcomeScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import palette from '../config/palette'
import routes from './routes'

const Stack = createStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: palette.primary,
      },
      headerTintColor: palette.snow,
    }}
  >
    <Stack.Screen
      name={String(routes.WELCOME)}
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={String(routes.LOGIN)} component={LoginScreen} />
    <Stack.Screen name={String(routes.REGISTER)} component={RegisterScreen} />
  </Stack.Navigator>
)

export default AuthNavigator
