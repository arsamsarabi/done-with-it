import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Modal } from 'react-native'
import * as Progress from 'react-native-progress'
import LottieView from 'lottie-react-native'

import palette from '../../config/palette'

const propTypes = {
  progress: PropTypes.number.isRequired,
  progressText: PropTypes.bool,
}

const defaultProps = {
  visible: false,
}

const UploadScreen = ({ progress, visible, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar progress={progress} color={palette.primary} width={200} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../../assets/animations/done.json')}
            style={styles.doneAnimation}
          />
        )}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  doneAnimation: {
    width: 150,
  },
})

UploadScreen.propTypes = propTypes
UploadScreen.defaultProps = defaultProps

export default UploadScreen
