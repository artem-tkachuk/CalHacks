import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MaterialHeader2 from "../components/MaterialHeader2";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";

export default class HostPageBefore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialHeader2 style={styles.Header} />
        <View style={styles.scrollAreaStackStack}>
          <View style={styles.scrollAreaStack}>
            <View style={styles.scrollArea}>
              <ScrollView
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <Text style={styles.HostEventHeader}>Host an Event</Text>
                <MaterialFixedLabelTextbox style={styles.EventTitle} />
                <MaterialFixedLabelTextbox style={styles.EventCapacity} />
                <MaterialFixedLabelTextbox style={styles.EventCity} />
                <MaterialButtonViolet1 style={styles.PostButton} />
                {/* <MaterialIconTextButtonsFooter style={styles.Footer} /> */}
              </ScrollView>
            </View>
          </View>
        </View>
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
    height: 56
  },
  HostEventHeader: {
    color: "rgba(39,34,34,1)",
    fontSize: 24,
    // fontFamily: "roboto-700",
    textAlign: "center"
  },
  EventTitle: {
    width: 333,
    height: 43,
    marginTop: 25,
    alignSelf: "center"
  },
  EventCapacity: {
    width: 333,
    height: 43,
    marginTop: 25,
    alignSelf: "center"
  },
  EventCity: {
    width: 333,
    height: 43,
    marginTop: 25,
    alignSelf: "center"
  },
  PostButton: {
    width: 323,
    height: 36,
    marginTop: 130,
    alignSelf: "center"
  },
  Footer: {
    width: 420,
    height: 87,
    marginTop: 28
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 420,
    height: 582,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    width: 420,
    height: 596
  },
  scrollAreaStack: {
    top: 0,
    left: 0,
    width: 420,
    height: 725,
    position: "absolute"
  },
  scrollAreaStackStack: {
    width: 420,
    height: 781,
    marginTop: 31
  }
});
