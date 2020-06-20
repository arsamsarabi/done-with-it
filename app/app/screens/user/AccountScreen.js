import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import palette from '../../config/palette'
import { Screen, ListItem, Icon, ListItemSeparator } from '../../components'
import routes from '../../navigation/routes'
import useAuth from '../../auth/useAuth'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      bgColor: palette.danger,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      bgColor: palette.primary,
    },
    targetScreen: routes.MESSAGES,
  },
]

const AccountScreen = ({ navigation }) => {
  const { user, logout } = useAuth()

  return (
    <Screen>
      <View style={styles.me}>
        <ListItem
          image={require('../../assets/images/arsam.jpeg')}
          title={user.name}
          subTitle={user.email}
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
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.logout}>
        <ListItem
          title="Log Out"
          onPress={() => logout()}
          IconCmponent={<Icon name="logout" bgColor={palette.alert} />}
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
    backgroundColor: palette.white,
    marginTop: 24,
  },
})

export default AccountScreen
