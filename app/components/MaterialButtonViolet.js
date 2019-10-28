import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class MaterialButtonViolet extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      text: "Join"
    };
    this.func = this.func.bind(this);
  }

  onPress = () => {
    this.setState({
      text: "Pending"
    });
  };

  func()
  {
    this.props.onPress();
    this.onPress();
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.func}
        style={[this.state.text == "Pending" ? styles.container2 : styles.container, this.props.style]}
        disabled={this.state.text == "Pending"}
      >
        <Text style={styles.caption}>
          {this.state.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  container2: {
    backgroundColor: "#808080",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14
    // fontFamily: "arial"
  }
});
