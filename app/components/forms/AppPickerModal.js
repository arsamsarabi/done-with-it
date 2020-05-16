import React from 'react'
import { StyleSheet, Modal, FlatList } from 'react-native'

import { Screen } from '../Screen'
import { CategoryPickerItem } from './CategoryPickerItem'
import { PickerItem } from './PickerItem'
import { AppButton } from '../AppButton'

export const AppPickerModal = ({
  modalVisibility,
  setModalVisibility,
  handleItemPress,
  items,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
}) => {
  return (
    <Modal visible={modalVisibility} animationType="slide">
      <Screen paddingHorizontal={16}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <PickerItemComponent item={item} onPress={() => handleItemPress(item)} />
          )}
          style={styles.flatList}
        />
        <AppButton
          style={styles.closeButton}
          color="secondary"
          title="close"
          onPress={() => setModalVisibility(false)}
        />
      </Screen>
    </Modal>
  )
}

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 32,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
})
