import { useEffect } from 'react'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

import expoPushTokensApi from '../api/expoPushTokens'
import navigation from '../navigation/rootNavigation'

export default useNotifications = (notificationListener) => {
  const registerForPushNotifications = async () => {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    if (!permission.granted) return

    try {
      const token = await Notifications.getExpoPushTokenAsync()
      expoPushTokensApi.register(token)
    } catch (error) {
      console.error('Error Getting a push token', error)
    }
  }

  useEffect(() => {
    registerForPushNotifications()
    if (notificationListener) Notifications.addListener(notificationListener)
    return () => {
      if (notificationListener) Notifications.removeListener(notificationListener)
    }
  }, [])
}
