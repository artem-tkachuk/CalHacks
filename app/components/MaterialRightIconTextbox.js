import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class MaterialRightIconTextbox extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          placeholder={this.props.inputStyle || "Label"}
          style={styles.inputStyle}
        />
        <Icon name="eye" style={styles.iconStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 16,
    paddingBottom: 8,
    fontSize: 16,
    lineHeight: 16
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingRight: 8
  }
});
