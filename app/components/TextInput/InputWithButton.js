import React from 'react'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'
import color from 'color'

import styles from './styles'

const InputWithButton = (props) => {

  const { onPress, buttonText, editable = true } = props

  const containerStyles = [styles.container]
  if (editable === false) {
    containerStyles.push(styles.disableInput)
  }
  console.log(containerStyles)

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier)
  return (
    <View style={containerStyles}>
      <TouchableHighlight onPress={onPress} style={styles.buttonContainer} underlayColor={underlayColor}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.seperator} />
      <TextInput style={styles.input} editable={editable} />
    </View>
  )
}

export default InputWithButton