import React from 'react'
import { Text } from 'react-native'

import { defaultStyles } from '../config'

export const AppText = ({ children, style }) => (
  <Text style={[defaultStyles.text, style]}>{children}</Text>
)
