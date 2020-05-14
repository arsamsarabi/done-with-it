import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Palette } from '../config'
import { AppText, Screen, ListItem, IconListItem } from '../components'

export const MyAccount = () => {
  const handleMyListings = () => {}
  const handleMyMessages = () => {}
  const handleLogOut = () => {}
  return (
    <Screen>
      <ListItem
        image={require('../assets/images/arsam.jpeg')}
        title="Arsam Sarabi"
        subTitle="arsamsarabi@me.com"
        style={styles.me}
      />
      <IconListItem
        icon="format-list-bulleted"
        iconColor={Palette.danger}
        title="My Listings"
        style={styles.myListings}
        onPress={handleMyListings}
      />
      <IconListItem
        icon="email"
        iconColor={Palette.primary}
        title="My Messages"
        style={styles.myMessages}
        onPress={handleMyMessages}
      />
      <IconListItem
        icon="logout"
        iconColor={Palette.alert}
        title="Log Out"
        style={styles.logout}
        onPress={handleLogOut}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  me: {
    backgroundColor: Palette.white,
    marginBottom: 40,
  },
  myListings: {
    backgroundColor: Palette.white,
    marginBottom: 1,
  },
  myMessages: {
    backgroundColor: Palette.white,
    marginBottom: 16,
  },
  logout: {
    backgroundColor: Palette.white,
  },
})
