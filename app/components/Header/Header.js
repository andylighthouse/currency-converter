import React from "react"
import { View, TouchableOpacity, Image } from "react-native"

import styles from "./styles"
import img from "./images/gear.png"

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image resizeMode="contain" source={img} style={styles.icon} />
    </TouchableOpacity>
  </View>
)

export default Header
