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
import { swapCurrency, changeCurrencyAmount } from "../actions/currencies"

class Home extends Component {
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate("CurrencyList", { title: "Base Currency", type: "base" })
  }

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate("CurrencyList", { title: "Quote Currency", type: "quote" })
  }

  handleTextChange = text => {
    this.props.dispatch(changeCurrencyAmount(text))
  }

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency())
  }

  handleOptionsPress = () => {
    this.props.navigation.navigate("Options", { title: "Options" })
  }

  render() {
    const {
      baseCurrency,
      quoteCurrency,
      amount,
      conversionRate,
      isFetching,
      lastConvertedDate,
    } = this.props

    let quotePrice = (amount * conversionRate).toFixed(2)

    if (isFetching) {
      quotePrice = "..."
    }

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
            value={quotePrice}
          />

          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            conversionRate={conversionRate}
            date={lastConvertedDate}
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
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
  }
}

export default connect(mapStateToProps)(Home)
