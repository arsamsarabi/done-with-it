import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { Screen, AppTextInput, AppButton } from '../components'

export const LoginScreen = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return (
    <Screen>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="key"
        placeholder="Password"
        textContentType="password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <AppButton
        style={styles.loginButton}
        title="Login"
        onPress={() => console.log(email, password)}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginVertical: 40,
  },
  loginButton: {
    marginTop: 32,
  },
})
