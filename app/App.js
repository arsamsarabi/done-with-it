import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './app/navigation/AuthNavigator'
import AppNavigator from './app/navigation/AppNavigator'
import NavigationTheme from './app/navigation/navigationTheme'

export default App = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}
