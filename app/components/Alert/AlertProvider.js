import React, { Component } from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import DropdownAlert from "react-native-dropdownalert"

class AlertProvider extends Component {
  getChildContext() {
    return {
      alert: (...args) => this.dropdown.alert(...args),
      alertWithType: (...args) => this.dropdown.alertWithType(...args),
    }
  }

  static childContextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func,
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(this.props.children)}
        <DropdownAlert
          ref={ref => {
            this.dropdown = ref
          }}
        />
      </View>
    )
  }
}

export default AlertProvider
