import React from 'react'
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native'

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Done With It ♻️</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
