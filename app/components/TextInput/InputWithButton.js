import React from "react"
import { View, Text, TouchableHighlight, TextInput } from "react-native"
import color from "color"

import styles from "./styles"

const InputWithButton = ({
  onPress,
  buttonText,
  editable = true,
  textColor,
  defaultValue,
  onChangeText,
  value,
}) => {
  const containerStyles = editable ? styles.container : styles.disabledContainer
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  )

  const buttonTextStyles = [styles.buttonText]
  if (textColor) {
    buttonTextStyles.push({ color: textColor })
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.buttonContainer}
        underlayColor={underlayColor}>
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>

      <View style={styles.separator} />

      <TextInput
        style={styles.input}
        editable={editable}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  )
}

export default InputWithButton
