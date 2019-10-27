import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

import * as firebase from "firebase";

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth.onAuchStateChanged(
      function(user) {
        if (user) {
          //redner main tab
          this.props.navigation.navigate("Main");
        } else {
          //render login
          this.props.navigation.navigate("Login");
        }
      }.bind(this)
    );
  };

  render() {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
