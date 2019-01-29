import React from "react"
import { View, Image } from "react-native"

import styles from "./styles"
import iconImage from "./images/check.png"

const Icon = ({ checkmark, visible, iconBackground }) => {
  const iconStyles = [styles.icon]

  if (visible) {
    iconStyles.push(styles.iconVisible)
  }

  if (iconBackground) {
    iconStyles.push({ backgroundColor: iconBackground })
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
