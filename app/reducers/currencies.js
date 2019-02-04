import {
  CHANGE_CURRENCY_AMOUNT,
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  // swapCurrency,
  // changeCurrencyAmount,
} from "../actions/currencies"

const initalState = {
  baseCurrency: "USD",
  quoteCurrency: "GBP",
  amount: 100,
  conversions: {},
}

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: "",
    rates: {},
  }

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency]
  }
  return {
    ...state.conversions,
    [action.currency]: conversion,
  }
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount || 0,
      }
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      }
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversions(state, action),
      }
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversions(state, action),
      }
    default:
      return state
  }
}

// console.log("initialState", initalState)
// console.log("swapCurrency", reducer(initalState, swapCurrency()))
// console.log("changeCurrencyAmount", reducer(initalState, changeCurrencyAmount(222)))

export default reducer