import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Formik } from 'formik'

import { Screen, AppTextInput, AppButton } from '../components'

export const LoginScreen = () => {
  return (
    <Screen>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log('form submitted', values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus
              onChangeText={handleChange('email')}
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="key"
              placeholder="Password"
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange('password')}
            />
            <AppButton style={styles.loginButton} title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
