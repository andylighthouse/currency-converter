import React from 'react'
import { View, Image, ImageBackground, Text } from "react-native"

import background from './images/background.png'
import logo from './images/logo.png'
import styles from './styles'

const Logo = () => (
  <View>
    <ImageBackground source={background} style={styles.imageBackground}>
      <Image source={logo} />
    </ImageBackground>
    <Text>Currency Converter</Text>
  </View>
)

export default Logo