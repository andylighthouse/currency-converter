import React, { Component } from "react"
import { View, Image, ImageBackground, Text, Keyboard } from "react-native"

import background from "./images/background.png"
import logo from "./images/logo.png"
import styles from "./styles"

class Logo extends Component {
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
