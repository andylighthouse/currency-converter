import React, { Component } from "react"
import { StatusBar, KeyboardAvoidingView } from "react-native"

import { Container } from "../components/Container"
import { Logo } from "../components/Logo"
import { InputWithButton } from "../components/TextInput"
import { ClearButton } from "../components/Buttons"
import { LastConverted } from "../components/Text"
import { Header } from "../components/Header"

const TEMP_BASE_CURRENCY = "USD"
const TEMP_QUOTE_CURRENCY = "BGP"
const TEMP_BASE_PRICE = "100"
const TEMP_QUOTE_PRICE = "80.99"
const TEMP_CONVERSION_RATE = 0.81
const TEMP_CONVERSION_DATE = new Date()

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log("press base")
    this.props.navigation.navigate("CurrencyList", { title: "Base Currency" })
  }

  handlePressQuoteCurrency = () => {
    console.log("press quote")
    this.props.navigation.navigate("CurrencyList", { title: "Quote Currency" })
  }

  handleTextChange = text => {
    console.log("change text", text)
  }

  handleSwapCurrency = () => {
    console.log("pressed swap currency")
  }

  handleOptionsPress = () => {
    console.log("options pressed")
    this.props.navigation.navigate("Options", { title: "Options" })
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />

        <Logo />

        <KeyboardAvoidingView behavior="padding">
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

          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
            date={TEMP_CONVERSION_DATE}
          />

          <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

export default Home
