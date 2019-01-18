import React, { Component } from "react"
import { StatusBar } from "react-native"

import { Container } from "../components/Container"
import { Logo } from "../components/Logo"
import { InputWithButton } from "../components/TextInput"
import { ClearButton } from "../components/Buttons"

const TEMP_BASE_CURRENCY = "USD"
const TEMP_QUOTE_CURRENCY = "BGP"
const TEMP_BASE_PRICE = "100"
const TEMP_QUOTE_PRICE = "80.99"
const TEMP_CONVERSION_RATE = 0.81
const TEMP_CONVERSION_DATE = new Date()

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log("press base")
  }

  handlePressQuoteCurrency = () => {
    console.log("press quote")
  }

  handleTextChange = text => {
    console.log("change text", text)
  }

  handleSwapCurrency = () => {
    console.log("pressed swap currency")
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />

        <Logo />

        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          onChangeText={this.handleTextChange}
          keyboardType="numeric"
        />

        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />

        <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
      </Container>
    )
  }
}

export default Home
