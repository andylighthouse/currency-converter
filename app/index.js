import React from "react"
import EStyleSheet from "react-native-extended-stylesheet"

import Home from "./screens/Home"
import CurrencyList from "./screens/CurrencyList"
import Options from "./screens/Options"
import Themes from "./screens/Themes"
import Navigator from "./config/routes"

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#FFFFFF",
  $separator: "#E2E2E2",
  $inputText: "#797979",
  $lightGrey: "#F0F0F0",
  $darkText: "#343434",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F",
})

export default () => <Navigator />
