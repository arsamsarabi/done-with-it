import { DefaultTheme } from '@react-navigation/native'

import palette from '../config/palette'

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: palette.primary,
    background: palette.snow,
  },
}
