import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Palette } from '../config'
import { AppText, Screen, ListItem, Icon } from '../components'

export const AccountScreen = () => {
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
      <ListItem
        title="My Listings"
        style={styles.myListings}
        onPress={handleMyListings}
        ImageComponent={<Icon name="format-list-bulleted" bgColor={Palette.danger} />}
      />
      <ListItem
        title="My Messages"
        style={styles.myMessages}
        onPress={handleMyMessages}
        ImageComponent={<Icon name="email" bgColor={Palette.primary} />}
      />
      <ListItem
        title="Log Out"
        style={styles.logout}
        onPress={handleLogOut}
        ImageComponent={<Icon name="logout" bgColor={Palette.alert} />}
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
