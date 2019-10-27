import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MaterialHeader2 from "../components/MaterialHeader2";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import * as database from "./database.js";
import * as firebase from "firebase";
import MapView from "react-native-maps";

export default class GoingPage extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "", capacity: "", address: "", requests: [] };

    firebase
      .database()
      .ref("/events")
      .on("value", snapshot => {
        if (snapshot.exists()) {
          snapshot.forEach(child => {
            console.log(database.getID());
            if (child.val()["host"] == database.getID()) {
              this.state = {
                title: child.val()["name"],
                capacity: child.val()["capacity"],
                address: child.val()["address"]
              };
              return;
            }
          });
        }
      });
  }

  render() {
    return (
      <View style={styles.containerAfter}>
        <MaterialHeader2 style={styles.Header} />
        <View style={styles.scrollAreaStack}>
          <View style={styles.scrollArea}>
            <ScrollView
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <ScrollView>
                <Text style={styles.MyEventHeader}>Going Event</Text>
                <View style={styles.MyEventInfo}>
                  <Text style={styles.text2}>Title: {this.state.title}</Text>
                  <Text style={styles.text3}>
                    Address: {this.state.address}
                  </Text>
                  <Text style={styles.text4}>
                    Capacity: {this.state.capacity}
                  </Text>
                </View>
                <View style={styles.containerAfter}>
                  <MapView
                    style={styles.map}
                    showsUserLocation={true}
                    followUserLocation={false}
                    zoomEnabled={true}
                  />
                </View>
              </ScrollView>
            </ScrollView>
          </View>
          {/* <MaterialIconTextButtonsFooter style={styles.Footer} /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 300,
    marginTop: 40,
    width: 329,
    alignSelf: "center",
    borderRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "grey",
    shadowOpacity: 0.5
  },
  container: {
    flex: 1
  },
  Header: {
    width: 420,
    height: 56
  },
  GoingEventHeader: {
    color: "rgba(39,34,34,1)",
    fontSize: 24,
    // fontFamily: "roboto-700",
    marginTop: 24,
    marginBottom: 24,
    alignSelf: "center",
    fontWeight: "500"
  },
  EventInfo: {
    width: 329,
    height: 348,
    backgroundColor: "rgba(230, 230, 230,1)",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "grey",
    shadowOpacity: 0.5
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
  },
  MyEventHeader: {
    color: "rgba(39,34,34,1)",
    fontSize: 24,
    // fontFamily: "roboto-700",
    textAlign: "center",
    marginTop: 25,
    fontWeight: "500"
  },
  MyEventInfo: {
    flexDirection: "column",
    width: 332,
    height: "auto",
    backgroundColor: "rgba(230, 230, 230,1)",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    padding: 20
  },
  text: {
    color: "rgba(39,34,34,1)",
    flex: 2,
    flexWrap: "wrap",
    width: "auto",
    fontSize: 16,
    marginLeft: 4
  },
  text2: {
    color: "rgba(39,34,34,1)",
    fontSize: 16,
    // fontFamily: "roboto-500",
    marginTop: 12,
    marginLeft: 14
  },
  text3: {
    color: "rgba(39,34,34,1)",
    fontSize: 16,
    // fontFamily: "arial",
    marginTop: 6,
    marginLeft: 14
  },
  text4: {
    color: "rgba(39,34,34,1)",
    fontSize: 16,
    // fontFamily: "arial",
    marginTop: 6,
    marginLeft: 13
  },
  RequestsHeader: {
    color: "rgba(39,34,34,1)",
    fontSize: 24,
    // fontFamily: "roboto-700",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30
  },
  Request: {
    width: 310,
    height: "auto",
    marginTop: 20,
    backgroundColor: "rgba(230, 230, 230,1)",
    flexDirection: "column",
    alignSelf: "center",
    borderRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    padding: 15,
    justifyContent: "center"
  },
  text6: {
    color: "rgba(39,34,34,1)",
    fontSize: 16,
    // fontFamily: "arial",
    marginTop: 13
  },
  materialButtonSuccess: {
    width: "auto",
    height: 36,
    marginLeft: 4,
    alignSelf: "flex-end"
  },
  materialButtonDanger: {
    width: "auto",
    height: 36,
    marginLeft: 4,
    marginRight: 4,
    alignSelf: "flex-end"
  },
  text6Row: {
    height: 36,
    flexDirection: "row",
    alignSelf: "stretch",
    marginTop: 20,
    display: "flex"
  }
});
