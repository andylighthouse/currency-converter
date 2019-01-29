import React, { Component } from "react"
import { ScrollView, StatusBar } from "react-native"

import { ListItem, Separator } from "../components/List"

class Themes extends Component {
  render() {
    return (
      <ScrollView>
        <StatusBar />
        <ListItem text="Blue" onPress={this.handleBluePress} />
      </ScrollView>
    )
  }
}

export default Themes
