import { useEffect, useState } from 'react'
import * as Location from 'expo-location'

import logger from '../utility/logger'

const useUserLocation = () => {
  const [location, setLocation] = useState()
  const [error, setError] = useState(null)

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync()
      if (!granted) return
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync()
      setLocation({ latitude, longitude })
    } catch (error) {
      logger.log(error)
      setError(error)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return { location, userLocationError: error }
}

export default useUserLocation
