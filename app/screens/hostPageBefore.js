import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialHeader2 from "../components/MaterialHeader2";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";

export default class HostPageBefore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialHeader2 style={styles.Header} />
        <Text style={styles.HostEventHeader}>Host an Event</Text>
        <MaterialFixedLabelTextbox style={styles.EventTitle} />
        <MaterialFixedLabelTextbox style={styles.EventCapacity} />
        <MaterialFixedLabelTextbox style={styles.EventCity} />
        <MaterialButtonViolet1 style={styles.PostButton} />
        {/* <MaterialIconTextButtonsFooter style={styles.Footer} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Header: {
    width: 420,
    height: 56,
    marginTop: 31
  },
  HostEventHeader: {
    color: "rgba(39,34,34,1)",
    fontSize: 24,
    // fontFamily: "roboto-700",
    marginTop: 22,
    marginLeft: 16
  },
  EventTitle: {
    width: 333,
    height: 43,
    marginTop: 59,
    marginLeft: 21
  },
  EventCapacity: {
    width: 333,
    height: 43,
    marginTop: 67,
    alignSelf: "center"
  },
  EventCity: {
    width: 333,
    height: 43,
    marginTop: 85,
    alignSelf: "center"
  },
  PostButton: {
    width: 323,
    height: 36,
    marginTop: 188,
    alignSelf: "center"
  },
  Footer: {
    width: 420,
    height: 87,
    marginTop: 28
  }
});
