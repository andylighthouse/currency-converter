import React, { Component } from "react"
import { View, Text, Keyboard, Platform, Animated } from "react-native"

import background from "./images/background.png"
import logo from "./images/logo.png"
import styles from "./styles"

const ANIMATION_DURATION = 250
class Logo extends Component {
  constructor(props) {
    super(props)

    this.containerImageSize = new Animated.Value(styles.$largeContainerSize)
    this.imageSize = new Animated.Value(styles.$largeImageSize)
    this.marginTop = new Animated.Value(styles.$largeMarginTop)
  }

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

  componentWillUnmount() {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageSize, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),

      Animated.timing(this.imageSize, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),

      Animated.timing(this.marginTop, {
        toValue: styles.$smallMarginTop,
        duration: ANIMATION_DURATION,
      }),
    ]).start()
  }

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageSize, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),

      Animated.timing(this.imageSize, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),

      Animated.timing(this.marginTop, {
        toValue: styles.$largeMarginTop,
        duration: ANIMATION_DURATION,
      }),
    ]).start()
  }

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageSize, height: this.containerImageSize },
    ]

    const imageStyles = [
      styles.logo,
      { width: this.imageSize, marginTop: this.marginTop },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ]

    return (
      <View style={styles.container}>
        <Animated.Image resizeMode="contain" source={logo} style={imageStyles} />
        <Animated.Image resizeMode="contain" source={background} style={containerImageStyle} />
        <Text style={styles.text}>Tina's Currency Converter</Text>
      </View>
    )
  }
}

export default Logo
