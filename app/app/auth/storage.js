import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

import logger from '../utility/logger'

const KEY = 'authToken'

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(KEY, authToken)
  } catch (error) {
    logger.log('Error storing the auth token', error)
  }
}

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(KEY)
  } catch (error) {
    logger.log('Error getting the auth token', error)
  }
}

const getUser = async () => {
  const token = await getToken()
  return token ? jwtDecode(token) : null
}

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(KEY)
  } catch (error) {
    logger.log('Error removing the auth token', error)
  }
}

export default {
  storeToken,
  getUser,
  removeToken,
  getToken,
}
