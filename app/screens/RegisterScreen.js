import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import { Screen, AppFormField, SubmitButton, AppForm } from '../components'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
})

export const RegisterScreen = () => {
  return (
    <Screen>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />

      <AppForm
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log('form submitted', values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          autoCapitalize="words"
          autoCorrect={false}
          icon="account"
          placeholder="Full Name"
          textContentType="name"
          autoFocus
        />
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
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

        <SubmitButton style={styles.registerButton} title="Register" />
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
  registerButton: {
    marginTop: 32,
  },
})
