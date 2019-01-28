import React from "react"
import { View, Image } from "react-native"

import styles from "./styles"
import iconImage from "./images/check.png"

const Icon = ({ checkmark, visible }) => {
  const iconStyles = [styles.icon]

  if (visible) {
    iconStyles.push(styles.iconVisible)
  }

  return (
    <View style={iconStyles}>
      {checkmark ? (
        <Image style={styles.checkIcon} source={iconImage} resizeMode="contain" />
      ) : null}
    </View>
  )
}

export default Icon
