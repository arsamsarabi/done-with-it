import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import { Screen, FormField, SubmitButton, Form } from '../../components'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
})

const RegisterScreen = () => {
  return (
    <Screen>
      <Image
        source={require('../../assets/images/logo.png')}
        blurRadius={0}
        fadeDuration={500}
        style={styles.logo}
      />
      <Form
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log('form submitted', values)}
        validationSchema={validationSchema}
      >
        <FormField
          name="name"
          autoCapitalize="words"
          autoCorrect={false}
          icon="account"
          placeholder="Full Name"
          textContentType="name"
          autoFocus
        />
        <FormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
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

        <SubmitButton style={styles.registerButton} title="Register" />
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
  registerButton: {
    marginTop: 32,
  },
})

export default RegisterScreen
