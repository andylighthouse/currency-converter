import React, { Component } from "react"
import { View, Image, ImageBackground, Text, Keyboard, Platform } from "react-native"

import background from "./images/background.png"
import logo from "./images/logo.png"
import styles from "./styles"

class Logo extends Component {
  componentDidMount() {
    let showListener = "keyboardWillShow"
    let hideListener = "keyboardWillHide"

    if (Platform.OS === "android") {
      showListener = "keyboardDidShow"
      hideListener = "keyboardDidHide"
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow)
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide)
  }

  componentWillUnmount() {}

  keyboardShow = () => {
    console.log("keyboard did show")
  }

  keyboardHide = () => {
    console.log("keyboard did hide")
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground resizeMode="contain" source={background} style={styles.containerImage}>
          <Image resizeMode="contain" source={logo} style={styles.logo} />
        </ImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }
}

export default Logo
