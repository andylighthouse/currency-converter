import React, { Component } from "react"
import { ScrollView, StatusBar, Platform, Linking } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import { ListItem, Separator } from "../components/List"
import { connectAlert } from "../components/Alert"

const ICON_COLOR = "#868686"
const ICON_SIZE = 23
const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md"

class Options extends Component {
  handleThemesPress = () => {
    this.props.navigation.navigate("Themes", { title: "Themes" })
  }

  handleSitePress = () => {
    Linking.openURL("https://exchangeratesapi.io/").catch(() =>
      this.props.alertWithType("error", "Sorry!", "Exchangeratesapi.io can't be opened right now"),
    )
  }

  render() {
    return (
      <ScrollView>
        {/* barstyle=default, dark text for ios */}
        <StatusBar translucent={false} barStyle="default" />

        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Separator />
        <ListItem
          text="Exchangeratesapi.io"
          onPress={this.handleSitePress}
          customIcon={<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
        />
      </ScrollView>
    )
  }
}

export default connectAlert(Options)
