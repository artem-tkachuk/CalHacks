import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MaterialHeader2 from "../components/MaterialHeader2";
import MaterialFixedLabelTextboxTitle from "../components/MaterialFixedLabelTextboxTitle";
import MaterialFixedLabelTextboxCapacity from "../components/MaterialFixedLabelTextboxCapacity";
import MaterialFixedLabelTextboxAddress from "../components/MaterialFixedLabelTextboxAddress";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import * as database from "./database.js";

export default class HostPageBefore extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", capacity: 0, address: "" };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeCapacity = this.changeCapacity.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  changeTitle(text) {
    this.state.title = text;
  }
  changeCapacity(val) {
    this.state.capacity = val;
  }
  changeAddress(text) {
    this.state.address = text;
  }
  onPress() {
    database.addEvent(
      this.state.title,
      this.state.capacity,
      this.state.address
    );
  }

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
                <MaterialFixedLabelTextbox
                  placeholder="Title:"
                  reff={this.changeTitle}
                  style={styles.EventTitle}
                />
                <MaterialFixedLabelTextbox
                  placeholder="Capacity:"
                  reff={this.changeCapacity}
                  style={styles.EventCapacity}
                />
                <MaterialFixedLabelTextbox
                  placeholder="Address:"
                  reff={this.changeAddress}
                  style={styles.EventCity}
                />
                <MaterialButtonViolet1
                  onPress={this.onPress}
                  style={styles.PostButton}
                />
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
    textAlign: "center",
    marginTop: 20
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
