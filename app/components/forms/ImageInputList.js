import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, ScrollView } from 'react-native'

import { ImageInput } from './ImageInput'

const propTypes = {
  imageUris: PropTypes.arrayOf(PropTypes.string),
  onAddImage: PropTypes.func.isRequired,
  onRemoveImage: PropTypes.func.isRequired,
}

const defaultProps = {
  imageUris: [],
}

export const ImageInputList = ({ imageUris, onAddImage, onRemoveImage }) => {
  const scrollViewRef = useRef(null)

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View style={styles.image} key={uri}>
              <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 8,
  },
})

ImageInputList.propTypes = propTypes

ImageInputList.defaultProps = defaultProps
