import React from "react"
import { View, Text, TouchableHighlight } from "react-native"

import styles from "./styles"
import Icon from "./Icon"

const ListItem = ({
  onPress,
  text,
  selected = false,
  checkmark = true,
  visible = true,
  customIcon = null,
  iconBackground,
}) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
)

export default ListItem
