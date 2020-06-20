import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'

import AuthNavigator from './app/navigation/AuthNavigator'
import AppNavigator from './app/navigation/AppNavigator'
import NavigationTheme from './app/navigation/navigationTheme'
import OfflineNotice from './app/components/OfflineNotice'
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage'

export default App = () => {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => {
          setIsReady(true)
        }}
      />
    )

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
