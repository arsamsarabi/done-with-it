import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { Palette } from '../config'
import { AppText, Screen, ListItem, Icon, ListItemSeparator } from '../components'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      bgColor: Palette.danger,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      bgColor: Palette.primary,
    },
  },
]

export const AccountScreen = () => {
  const handleMyListings = () => {}
  const handleMyMessages = () => {}
  const handleLogOut = () => {}
  return (
    <Screen>
      <View style={styles.me}>
        <ListItem
          image={require('../assets/images/arsam.jpeg')}
          title="Arsam Sarabi"
          subTitle="arsamsarabi@me.com"
        />
      </View>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconCmponent={<Icon name={item.icon.name} bgColor={item.icon.bgColor} />}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.logout}>
        <ListItem
          title="Log Out"
          onPress={handleLogOut}
          IconCmponent={<Icon name="logout" bgColor={Palette.alert} />}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  me: {
    marginBottom: 40,
  },
  logout: {
    backgroundColor: Palette.white,
    marginTop: 24,
  },
})
