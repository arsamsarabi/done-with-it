import React from 'react'
import { View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const Icon = ({ name, size = 40, bgColor = '#333', color = '#f1f1f1' }) => {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={color} />
    </View>
  )
}
