import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import { Screen, FormField, SubmitButton, Form, ErrorMessage } from '../../components'
import authApi from '../../api/auth'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password)
    if (!result.ok) return setLoginFailed(true)
    setLoginFailed(false)
    console.log(result.data)
  }

  return (
    <Screen>
      <Form
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password." visibility={loginFailed} />
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

export default LoginScreen
