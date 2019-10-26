import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialHeader2 from "../components/MaterialHeader2";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";

export default class GoingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialHeader2 style={styles.Header} />
        <Text style={styles.GoingEventHeader}>Going Event</Text>
        <View style={styles.EventInfo}>
          <Text style={styles.EventTitleInfo}>Event Title</Text>
          <Text style={styles.EventDetailsInfo}>Event Details</Text>
          <Text style={styles.EventLocationInfo}>Event Location</Text>
        </View>
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
  GoingEventHeader: {
    color: "rgba(39,34,34,1)",
    fontSize: 24,
    // fontFamily: "roboto-700",
    marginTop: 24,
    alignSelf: "center"
  },
  EventInfo: {
    width: 329,
    height: 348,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 15,
    marginLeft: 23
  },
  EventTitleInfo: {
    color: "rgba(39,34,34,1)",
    fontSize: 24,
    // fontFamily: "arial",
    marginTop: 30,
    marginLeft: 23
  },
  EventDetailsInfo: {
    color: "rgba(39,34,34,1)",
    fontSize: 24,
    // fontFamily: "arial",
    marginTop: 45,
    marginLeft: 23
  },
  EventLocationInfo: {
    color: "rgba(39,34,34,1)",
    fontSize: 24,
    // fontFamily: "arial",
    marginTop: 113,
    marginLeft: 23
  },
  Footer: {
    width: 420,
    height: 87,
    marginTop: 227
  }
});
