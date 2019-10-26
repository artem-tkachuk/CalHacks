import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class MaterialIconTextButtonsFooter extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity style={styles.HomeButton}>
          <MaterialCommunityIconsIcon name="home" style={styles.icon1} />
          <Text style={styles.btn1Text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SearchButton}>
          <MaterialCommunityIconsIcon
            name="arrow-right-bold-circle"
            style={styles.activeIcon}
          />
          <Text style={styles.activeContent}>Going Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.HostButton}>
          <MaterialCommunityIconsIcon name="account-box" style={styles.icon3} />
          <Text style={styles.text}>Host a Event</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    elevation: 3,
    shadowOffset: {
      height: -2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  HomeButton: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  btn1Text: {
    backgroundColor: "transparent",
    color: "rgba(158,158,158,1)",
    paddingTop: 4,
    fontSize: 12
    // fontFamily: "arial"
  },
  SearchButton: {
    flex: 1,
    alignItems: "center",
    paddingTop: 6,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(97,97,97,1)",
    fontSize: 24,
    opacity: 0.8
  },
  activeContent: {
    backgroundColor: "transparent",
    color: "rgba(158,158,158,1)",
    paddingTop: 4,
    fontSize: 14
    // fontFamily: "arial"
  },
  HostButton: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  text: {
    backgroundColor: "transparent",
    color: "rgba(158,158,158,1)",
    paddingTop: 4,
    fontSize: 12
    // fontFamily: "arial"
  }
});
