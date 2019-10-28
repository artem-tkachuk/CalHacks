import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class MaterialSearchBar1 extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.rect1}>
          <View style={styles.leftIconButtonRow}>
            <TouchableOpacity style={styles.leftIconButton}>
              <MaterialCommunityIconsIcon
                name="arrow-left"
                style={styles.leftIcon}
              />
            </TouchableOpacity>
            <TextInput placeholder="Search" style={styles.inputStyle} />
          </View>
          <View style={styles.leftIconButtonRowFiller} />
          <TouchableOpacity style={styles.rightIconButton}>
            <MaterialCommunityIconsIcon name="microphone" style={styles.rightIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  rect1: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    flex: 1,
    marginBottom: 4,
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4
  },
  leftIconButton: {
    padding: 11,
    marginTop: 2
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#000",
    // fontFamily: "Roboto",
    // fontPostscriptName: "arial",
    fontSize: 24,
    opacity: 0.6
  },
  inputStyle: {
    width: 257,
    height: 48,
    color: "#000",
    alignSelf: "flex-start",
    paddingRight: 5,
    fontSize: 16,
    // fontFamily: "arial",
    lineHeight: 16,
    marginLeft: 8
  },
  leftIconButtonRow: {
    height: 48,
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 3
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    alignItems: "center",
    padding: 11,
    marginRight: 5,
    marginTop: 5
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#000",
    // fontFamily: "Roboto",
    // fontPostscriptName: "arial",
    fontSize: 24,
    opacity: 0.6
  }
});
