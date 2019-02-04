import { takeEvery, select, call, put } from "redux-saga/effects"
//1 swap currency
//2. Change Base Currency
//3 make initial load

import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from "../actions/currencies"

const getLatestRate = currency => fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)

function* fetchLatestConversionRates(action) {
  // console.log("TODO: update the things", action)
  // getLatestRate("USD")
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  //   .catch(err => console.log("err: ", err))
  try {
    let currency = action.currency

    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency)
    }

    const response = yield call(getLatestRate, currency)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error })
    } else {
      yield put({ type: CONVERSION_RESULT, result })
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message })
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates)
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates)
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates)
}