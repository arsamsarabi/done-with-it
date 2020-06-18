import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
import { AsyncStorage } from 'react-native'

import AuthNavigator from './app/navigation/AuthNavigator'
import AppNavigator from './app/navigation/AppNavigator'
import NavigationTheme from './app/navigation/navigationTheme'

export default App = () => {
  const netInfo = useNetInfo()
  console.log(netInfo.isInternetReachable)

  const setAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ name: 'Arsam' }))
      const value = await AsyncStorage.getItem('person')
      const person = JSON.parse(value)
      console.log(person)
    } catch (error) {
      console.error(error)
    }
  }

  setAsyncStorage()

  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}
