import React from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native'

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/icon.png')}
        blurRadius={0}
        fadeDuration={1000}
        style={styles.logo}
      />

      <Text>Done With It ♻️</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
})
