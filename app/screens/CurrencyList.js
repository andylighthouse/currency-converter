import React, { Component } from "react"
import { FlatList, View, StatusBar } from "react-native"
import { connect } from "react-redux"

import currencies from "../data/currencies"
import { ListItem, Separator } from "../components/List"

//actions
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies"

class CurrencyList extends Component {
  handlePress = currency => {
    const { type } = this.props.navigation.state.params
    const { dispatch, navigation } = this.props

    if (type === "base") {
      dispatch(changeBaseCurrency(currency))
    } else if (type === "quote") {
      dispatch(changeQuoteCurrency(currency))
    }

    navigation.goBack(null)
  }

  render() {
    const { currentBaseCurrency, currentQuoteCurrency, primaryColor } = this.props

    let currentCurrency = ""

    const { type } = this.props.navigation.state.params
    if (type === "base") {
      currentCurrency = currentBaseCurrency
    } else if (type === "quote") {
      currentCurrency = currentQuoteCurrency
    }

    return (
      <View>
        <StatusBar translucent={false} barStyle="default" />

        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === currentCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentBaseCurrency: state.currencies.baseCurrency,
    currentQuoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.themes.primaryColor,
  }
}

export default connect(mapStateToProps)(CurrencyList)
