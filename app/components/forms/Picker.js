import React, { useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { palette } from '../../config'
import { Text } from '../Text'
import { PickerModal } from './PickerModal'

export const Picker = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
  width = '100%',
  PickerItemComponent,
  numberOfColumns,
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
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={[styles.text, styles.placeholder]}>{placeholder}</Text>
          )}

          <MaterialCommunityIcons name="chevron-down" size={20} color={palette.text} />
        </View>
      </TouchableWithoutFeedback>
      <PickerModal
        items={items}
        handleItemPress={handleItemPress}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
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
