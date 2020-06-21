import { useEffect } from 'react'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

import expoPushTokensApi from '../api/expoPushTokens'
import logger from '../utility/logger'

export default useNotifications = (notificationListener) => {
  const registerForPushNotifications = async () => {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    if (!permission.granted) return

    try {
      const token = await Notifications.getExpoPushTokenAsync()
      expoPushTokensApi.register(token)
    } catch (error) {
      logger.log('Error Getting a push token', error)
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
