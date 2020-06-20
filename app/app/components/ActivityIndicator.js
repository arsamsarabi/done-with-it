import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

import palette from '../config/palette'

const propTypes = {
  visible: PropTypes.bool,
}

const defaultProps = {
  visible: false,
}

const ActivityIndicator = ({ visible }) => {
  if (!visible) return null
  return (
    <View style={styles.container}>
      <LottieView autoPlay loop source={require('../assets/animations/loading.json')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.overlayBg,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
})

ActivityIndicator.propTypes = propTypes
ActivityIndicator.defaultProps = defaultProps

export default ActivityIndicator
