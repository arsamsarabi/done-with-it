import React from 'react'
import PropTypes from 'prop-types'
import LottieView from 'lottie-react-native'

const propTypes = {
  isVisible: PropTypes.bool,
}

const defaultProps = {
  isVisible: false,
}

const ActivityIndicator = ({ isVisible }) => {
  if (!isVisible) return null
  return <LottieView autoPlay loop source={require('../assets/animations/loading.json')} />
}

ActivityIndicator.propTypes = propTypes
ActivityIndicator.defaultProps = defaultProps

export default ActivityIndicator
