import React, { useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { palette } from '../../config'

export const ImageInput = ({ imageUri, onChangeImage }) => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!granted) {
      alert('You need to enable permission to access the library')
    }
  }

  useEffect(() => {
    requestPermission()
  }, [])

  selectImage = async () => {
    try {
      const { canceled, uri } = await ImagePicker.launchImageLibraryAsync()
      if (!canceled) {
        onChangeImage(uri)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      {!imageUri && (
        <TouchableOpacity onPress={selectImage} style={styles.button}>
          <MaterialCommunityIcons name="camera" size={40} color={palette.darkGrey} />
        </TouchableOpacity>
      )}
      {imageUri && (
        <TouchableOpacity onPress={() => onChangeImage(undefined)}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </TouchableOpacity>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  constainer: {},
  button: {
    backgroundColor: palette.lightGrey,
    width: 100,
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
})
