import { StatusBar } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"

import Home from "../screens/Home"
import CurrencyList from "../screens/CurrencyList"
import Options from "../screens/Options"
import Themes from "../screens/Themes"

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { header: () => null },
    },
    Options: {
      screen: Options,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
    Themes: {
      screen: Themes,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    headerLayoutPreset: "center",
  },
)

const CurrencyListStack = createStackNavigator(
  {
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    headerLayoutPreset: "center",
  },
)

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeStack },
    CurrencyList: { screen: CurrencyListStack },
  },
  {
    mode: "modal",
    headerMode: "none",
  },
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
