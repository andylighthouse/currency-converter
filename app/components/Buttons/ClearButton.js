import React from "react"
import { TouchableOpacity, View, Text, Image } from "react-native"

import styles from "./styles"
import icon from "./images/icon.png"

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image style={styles.icon} resizeMode="contain" source={icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
)

export default ClearButton
