import React, { Component } from "react"
import { StatusBar, KeyboardAvoidingView } from "react-native"
import { connect } from "react-redux"

import { Container } from "../components/Container"
import { Logo } from "../components/Logo"
import { InputWithButton } from "../components/TextInput"
import { ClearButton } from "../components/Buttons"
import { LastConverted } from "../components/Text"
import { Header } from "../components/Header"

//actions
import { swapCurrency } from "../actions/currencies"
import { changeCurrencyAmount } from "../actions/currencies"

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
    this.props.dispatch(changeCurrencyAmount(text))
    console.log(changeCurrencyAmount(text))
  }

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency())
  }

  handleOptionsPress = () => {
    console.log("options pressed")
    this.props.navigation.navigate("Options", { title: "Options" })
  }

  render() {
    const { baseCurrency, quoteCurrency, amount } = this.props
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />

        <Logo />

        <KeyboardAvoidingView behavior="padding">
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            onChangeText={this.handleTextChange}
            keyboardType="numeric"
          />

          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={TEMP_QUOTE_PRICE}
          />

          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            conversionRate={TEMP_CONVERSION_RATE}
            date={TEMP_CONVERSION_DATE}
          />

          <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency
  const quoteCurrency = state.currencies.quoteCurrency

  const conversionSelector = state.currencies.conversions[baseCurrency] || {}

  const rates = conversionSelector.rates || {}

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
  }
}

export default connect(mapStateToProps)(Home)

const rest = {
  USD: {
    isFetching: false,
    base: "USD",
    date: "2017-05-31",
    rates: {
      AUD: 1.3416,
      BGN: 1.743,
      BRL: 3.2515,
    },
  },
}
