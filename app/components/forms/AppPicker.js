import React, { useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Modal, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { palette } from '../../config'
import { AppText } from '../AppText'
import { Screen } from '../Screen'
import { PickerItem } from './PickerItem'

export const AppPicker = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
  width = '100%',
}) => {
  const [modalVisibility, setModalVisibility] = useState(false)

  const handleItemPress = (item) => {
    onSelectItem(item)
    setModalVisibility(false)
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisibility(true)}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons name={icon} size={24} color={palette.text} />}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={[styles.text, styles.placeholder]}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons name="chevron-down" size={20} color={palette.text} />
        </View>
      </TouchableWithoutFeedback>
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
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.lightGrey,
    borderRadius: 12,
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
  },
  text: {
    marginLeft: 16,
    flex: 1,
  },
  placeholder: {
    color: palette.grey,
  },
})
