import React from 'react'
import { StyleSheet, Modal, FlatList, Button } from 'react-native'

import { Screen } from '../Screen'
import { PickerItem } from './PickerItem'

export const AppPickerModal = ({ modalVisibility, setModalVisibility, handleItemPress, items }) => {
  return (
    <Modal visible={modalVisibility} animationType="slide">
      <Screen>
        <Button title="close" onPress={() => setModalVisibility(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem label={item.label} onPress={() => handleItemPress(item)} />
          )}
        />
      </Screen>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {},
})
