import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialSearchBar1 from "../components/MaterialSearchBar1";
import MaterialHeader2 from "../components/MaterialHeader2";
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyChrZ3JhGkEbUewo7D-VL5qE9w5Fs656ws",
  authDomain: "calhacks-9e46e.firebaseapp.com",
  databaseURL: "https://calhacks-9e46e.firebaseio.com",
  storageBucket: "calhacks-9e46e.appspot.com"
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventTitles: ["Looking for Bass Guitar Player"],
      eventCity: ["Berkeley"],
      eventCapacity: [1]
    };
  }

  getDataUsingGet() {
    //GET request
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET"
      //Request Type
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        //Success
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  getDataUsingPost() {
    //POST request
    fetch("https://calhacks-257106.appspot.com/add-user", {
      method: "POST",
      body: []
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  alertt() {
    this.state.eventTitles = "hahaha";
  }
  render() {
    firebase.initializeApp(firebaseConfig);
    firebase.database().ref('/users').set({
      name: "mike",
    }, function(error) {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
      }
    });
    return (
      <View style={styles.container}>
        <View style={styles.scrollAreaStackStack}>
          <View style={styles.scrollAreaStack}>
            <View style={styles.scrollArea}>
              <ScrollView
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <Text style={styles.LiveEventsHeader}>
                  Live Events Happening Now
                </Text>

                <View style={styles.Event}>
                  <View style={styles.textColumnRow}>
                    <View style={styles.textColumn}>
                      <Text style={styles.text}>
                        {this.state.eventTitles[0]}
                      </Text>
                      <Text style={styles.text2}>
                        City: {this.state.eventCity[0]}
                      </Text>
                    </View>
                    <MaterialButtonViolet
                      style={styles.materialButtonViolet}
                      onPress={this.alertt}
                    />
                  </View>
                  <Text style={styles.text3}>
                    Capacity: {this.state.eventCapacity[0]}
                  </Text>
                </View>
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
    flex: 1
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
    marginLeft: 17
  },
  text: {
    color: "rgba(39,34,34,1)",
    fontSize: 20
    // fontFamily: "roboto-500"
  },
  text2: {
    color: "rgba(39,34,34,1)",
    fontSize: 20,
    // fontFamily: "arial",
    marginTop: 6
  },
  textColumn: {
    width: 200,
    marginBottom: 6
  },
  materialButtonViolet: {
    width: 100,
    height: 36,
    marginLeft: 66,
    marginTop: 16
  },
  textColumnRow: {
    height: 52,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 14,
    marginRight: 33
  },
  text3: {
    color: "rgba(39,34,34,1)",
    fontSize: 20,
    // fontFamily: "arial",
    marginLeft: 13
  },
  Footer: {
    top: 638,
    left: 0,
    width: 420,
    height: 87,
    position: "absolute"
  },
  SearchBar: {
    top: 0,
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
    top: 0,
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
