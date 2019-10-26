import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialSearchBar1 from "../components/MaterialSearchBar1";
import MaterialHeader2 from "../components/MaterialHeader2";
import * as database from "./database.js";
import * as firebase from "firebase";
import { showMessage, hideMessage } from "react-native-flash-message";

class Event extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={styles.Event}>
          <View style={styles.textColumnRow}>
            <View style={styles.textColumn}>
              <Text style={styles.text}>{this.props.name}</Text>
              <Text style={styles.text3}>capacity: {this.props.capacity}</Text>
            </View>
            <MaterialButtonViolet
              style={styles.materialButtonViolet}
              onPress={() => {
                showMessage({
                  message: "Someone wants to join your event",
                  type: "info",
                  backgroundColor: "black", // background color
                  color: "white" // text color
                });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
    this.updateEvents = this.updateEvents.bind(this);
  }

  getDataUsingGet() {
    //GET request
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET"
      //Request Typeeeee
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        //Success

        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch(error => {
        //Error

        console.error(error);
      });
  }

  getDataUsingPost() {
    //POST request
    fetch("https://calhacks-257106.appspot.com/add-user", {
      method: "POST", //Request Type
      //body: [], //post body
      headers: {
        //Header Defination
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    })
      .then(responseJson => {
        console.log(responseJson.body);
      })
      //If response is not in json then in error
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }
  updateEvents(snapshot) {
    if (snapshot.exists()) {
      var all_events = [];
      snapshot.forEach(child => {
        all_events.push({
          name: child.val()["name"],
          capacity: child.val()["capacity"]
        });
      });
      this.setState({ events: all_events });
    }
  }

  componentWillMount() {
    this.state.events = [];
    database.initialize();
    firebase
      .database()
      .ref("/events")
      .on("value", this.updateEvents);
  }

  render() {
    const events = this.state.events.map((item, key) => (
      <Event key={key} name={item.name} capacity={item.capacity} />
    ));

    return (
      <View style={styles.container}>
        <View style={styles.scrollAreaStackStack}>
          <View style={styles.scrollAreaStack}>
            <View style={styles.scrollArea}>
              <ScrollView
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <ScrollView>
                  <Text style={styles.LiveEventsHeader}>
                    Live Events Happening Now
                  </Text>
                  {events}
                </ScrollView>
              </ScrollView>
            </View>
            {/* <MaterialIconTextButtonsFooter style={styles.Footer} /> */}
            <MaterialSearchBar1 style={styles.SearchBar} />
          </View>
          <MaterialHeader2 style={styles.Header} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopColor: "red"
  },
  scrollArea: {
    top: 56,
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
  LiveEventsHeader: {
    color: "rgba(39,34,34,1)",
    fontSize: 24,
    // fontFamily: "roboto-700",
    marginTop: 18,
    marginLeft: 34
  },
  Event: {
    width: 380,
    height: 120,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 30,
    marginLeft: 17,
    borderRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "grey",
    shadowOpacity: 0.5
  },
  text: {
    color: "rgba(39,34,34,1)",
    fontSize: 18
    // fontFamily: "roboto-500"
  },
  text2: {
    color: "rgba(39,34,34,1)",
    fontSize: 14
  },
  textColumn: {
    flexDirection: "column"
  },
  materialButtonViolet: {
    width: 100,
    height: 36,
    marginTop: 20
  },
  textColumnRow: {
    flexDirection: "row",
    margin: 10,
    textAlign: "center",
    justifyContent: "space-around"
  },
  text3: {
    color: "rgba(39,34,34,1)",
    fontSize: 14
  },
  Footer: {
    top: 638,
    left: 0,
    width: 420,
    height: 87,
    position: "absolute"
  },
  SearchBar: {
    top: -35,
    left: 0,
    width: 420,
    height: 56,
    position: "absolute"
  },
  scrollAreaStack: {
    top: 56,
    left: 0,
    width: 420,
    height: 725,
    position: "absolute"
  },
  Header: {
    top: -30,
    left: 0,
    width: 420,
    height: 56,
    position: "absolute"
  },
  scrollAreaStackStack: {
    width: 420,
    height: 781,
    marginTop: 31
  }
});
