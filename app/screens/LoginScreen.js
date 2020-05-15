import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import { Screen, AppFormField, SubmitButton, AppForm } from '../components'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
})

export const LoginScreen = () => {
  return (
    <Screen>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />

      <AppForm
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log('form submitted', values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="key"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />

        <SubmitButton style={styles.loginButton} title="Login" />
      </AppForm>
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
