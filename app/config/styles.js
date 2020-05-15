import { Platform } from 'react-native'

import { palette } from './palette'

export const defaulStyles = {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: palette.text,
  },
}
