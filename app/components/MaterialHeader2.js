import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FlashMessage from "react-native-flash-message";

export default class MaterialHeader2 extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.leftIconButtonRow}>
          <TouchableOpacity style={styles.leftIconButton}>
            <MaterialCommunityIconsIcon name="menu" style={styles.leftIcon} />
          </TouchableOpacity>
          <View style={styles.textWrapper}>
            <Text numberOfLines={1} style={styles.title}>
              CalHacks
            </Text>
          </View>
        </View>
        <View style={styles.leftIconButtonRowFiller} />
        <View style={styles.rightIconsWrapper}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIconsIcon
              name="dots-vertical"
              style={styles.rightIcon2}
            />
          </TouchableOpacity>
        </View>
        <FlashMessage position="top" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  leftIconButton: {
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    // fontFamily: "Roboto",
    // fontPostscriptName: "arial",
    fontSize: 24
  },
  textWrapper: {
    alignSelf: "flex-end",
    marginLeft: 21,
    marginBottom: 14
  },
  title: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    // fontFamily: "arial",
    lineHeight: 18
  },
  leftIconButtonRow: {
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
    marginTop: 5
  },
  iconButton: {
    padding: 11
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    // fontFamily: "Roboto",
    // fontPostscriptName: "arial",
    fontSize: 24
  }
});
