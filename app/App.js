import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './app/navigation/AuthNavigator'
import AppNavigator from './app/navigation/AppNavigator'
import NavigationTheme from './app/navigation/navigationTheme'
import OfflineNotice from './app/components/OfflineNotice'

export default App = () => (
  <>
    <OfflineNotice />
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  </>
)
