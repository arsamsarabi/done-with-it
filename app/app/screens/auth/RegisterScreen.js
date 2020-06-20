import React, { useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import { Screen, FormField, SubmitButton, Form, ErrorMessage } from '../../components'
import authApi from '../../api/auth'
import usersApi from '../../api/users'
import useAuth from '../../auth/useAuth'
import useApi from '../../hooks/useApi'
import ActivityIndicator from '../../components/ActivityIndicator'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(5).label('Password'),
})

const RegisterScreen = () => {
  const { login } = useAuth()
  const [error, setError] = useState(null)
  const registerApi = useApi(usersApi.register)
  const loginApi = useApi(authApi.login)

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo)

    if (!result.ok) {
      if (result.data) {
        setError(result.data.error)
      } else {
        setError('An unexpected error occurred')
        console.error(result)
      }
      return
    }
    setError(null)

    const { data: authToken } = await loginApi.request(userInfo.email, userInfo.password)
    login(authToken)
  }

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen paddingHorizontal={16}>
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
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visibility={!!error} />
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
    </>
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
