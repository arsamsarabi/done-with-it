import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { Screen, AppTextInput, AppButton, AppText } from '../components'
import { palette } from '../config'

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
        {({ handleChange, handleSubmit, errors }) => (
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
            {errors.email && <AppText style={styles.errorText}>{errors.email}</AppText>}
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="key"
              placeholder="Password"
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange('password')}
            />
            {errors.password && <AppText style={styles.errorText}>{errors.password}</AppText>}
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
  errorText: {
    color: palette.danger,
    fontWeight: '500',
  },
})
