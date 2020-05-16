import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import { Screen, FormField, SubmitButton, Form } from '../../components'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
})

export const LoginScreen = () => {
  return (
    <Screen>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

      <Form
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log('form submitted', values)}
        validationSchema={validationSchema}
      >
        <FormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus
        />
        <FormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="key"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />

        <SubmitButton style={styles.loginButton} title="Login" />
      </Form>
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
