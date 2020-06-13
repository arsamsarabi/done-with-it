import React, { useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { StyleSheet, Image, TouchableWithoutFeedback, View, Alert } from 'react-native'
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

  const selectImage = async () => {
    try {
      const { canceled, uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Image,
        quality: 0.5,
      })
      if (!canceled) {
        onChangeImage(uri)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handlePress = () => {
    if (!imageUri) {
      selectImage()
    } else {
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' },
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={palette.darkGrey} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.lightGrey,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
