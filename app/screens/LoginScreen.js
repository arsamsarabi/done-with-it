import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { Screen, AppButton, AppFormField } from '../components'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
})

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
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
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
