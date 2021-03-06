import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Keyboard, Alert } from 'react-native'
import * as Yup from 'yup'
import { Notifications } from 'expo'

import messagesApi from '../../../api/messages'
import { FormField, SubmitButton, Form } from '../../../components'
import logger from '../../../utility/logger'

const propTypes = {
  listingId: PropTypes.number.isRequired,
}

const defaultProps = {}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().label('Message'),
})

const ContactForm = ({ listingId }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss()

    const result = await messagesApi.send(message, listingId)

    if (!result.ok) {
      logger.log('Error sending message', result)
      return Alert.alert('Error', 'Could not send the message. Please try again.')
    }

    resetForm()

    Notifications.presentLocalNotificationAsync({
      title: 'Awesome!',
      body: 'Your message has been sent to the seller.',
    })
  }

  return (
    <View style={styles.container}>
      <Form
        initialValues={{
          message: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField name="message" autoCapitalize="none" placeholder="Message" />
        <SubmitButton style={styles.submitButton} title="Contact Seller" />
      </Form>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  submitButton: {
    textTransform: 'uppercase',
  },
})

ContactForm.propTypes = propTypes
ContactForm.defaultProps = defaultProps

export default ContactForm
