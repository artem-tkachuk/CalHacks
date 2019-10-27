import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialSearchBar1 from "../components/MaterialSearchBar1";
import MaterialHeader2 from "../components/MaterialHeader2";
import * as database from "./database.js";
import * as firebase from "firebase";
import { showMessage, hideMessage } from "react-native-flash-message";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialButtonPrimary1 from "../components/MaterialButtonPrimary1";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";

class Login extends Component {
  signInWIthGoogelAsyc = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        behavior: "web",
        iosClientId:
          "23062809976-iqp2dvlj9js30sq2p84v0mmb041dul3r.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type == "success") {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect}>
          <Icon name="account-group" style={styles.icon} />
          <View style={styles.ManualLogin}>
            <Text style={styles.Username}>Username</Text>
            <MaterialUnderlineTextbox
              inputStyle="Username"
              style={styles.materialUnderlineTextbox}
            />
            <Text style={styles.Password}>Password</Text>
            <MaterialRightIconTextbox
              inputStyle="Password"
              style={styles.materialRightIconTextbox}
            />
            <View style={styles.Buttons}>
              <MaterialButtonPrimary caption="" style={styles.SignInButton} />
              <MaterialButtonPrimary1 style={styles.LogInButton} />
            </View>
          </View>
          <View style={styles.group3}>
            <Text style={styles.divider}>or Log in with one click</Text>
            <View style={styles.group2}>
              <MaterialButtonShare style={styles.Google} />
              <MaterialButtonShare1 style={styles.Facebook} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class Event extends Component {
  constructor(props) {
    super(props);
    this.joinEvent = this.joinEvent.bind(this);
    // this.helper = this.helper.bind(this);
    this.notifyHostWithMessage = this.notifyHostWithMessage.bind(this);
    // firebase
    //   .database()
    //   .ref("/events/" + this.props.id + "/pending")
    //   .on("child_added");
  }

  helper(data) {
    //console.log("listening on " + this.props.id);
    console.log(data.val());
    firebase
      .database()
      .ref("/active_users")
      .child(data.val())
      .child("name")
      .once("value")
      .then(this.notifyHostWithMessage);
  }

  notifyHostWithMessage(s) {
    for (var i = 0; i < this.props.events.length; i++) {
      if (this.props.events[i]["host"] == database.getID()) {
        showMessage({
          message: "Someone wants to join your event",
          type: "info",
          backgroundColor: "black", // background color
          color: "white" // text color
        });
      }
    }
  }

  joinEvent() {
    firebase
      .database()
      .ref("/events")
      .child(this.props.id)
      .once("value")
      .then(function(snapshot) {
        snapshot
          .child("pending")
          .ref.push()
          .set(database.getID());
      });
  }
  render() {
    return (
      <View>
        <View style={styles.Event}>
          <View style={styles.textColumnRow}>
            <View style={styles.textColumn}>
              <Text style={styles.text}>{this.props.name}</Text>
              <Text style={styles.text3}>Capacity: {this.props.capacity}</Text>
            </View>
            <MaterialButtonViolet
              style={styles.materialButtonViolet}
              onPress={this.joinEvent}
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
          capacity: child.val()["capacity"],
          id: child.val()["id"],
          host: child.val()["host"]
        });
      });
      this.setState({ events: all_events });
    }
  }

  componentWillMount() {
    this.state.events = [];
    // database.initialize();
    // database.addUser("manlai");
    firebase
      .database()
      .ref("/events")
      .on("value", this.updateEvents);
  }

  render() {
    const events = this.state.events.map((item, key) => (
      <Event
        events={this.state.events}
        key={key}
        name={item.name}
        capacity={item.capacity}
        id={item.id}
      />
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
    shadowOpacity: 0.5,
    padding: 15
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
    justifyContent: "space-between"
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
  },

  rect: {
    width: 241,
    height: 379,
    backgroundColor: "rgba(232,244,232,1)",
    alignSelf: "center",
    justifyContent: "space-between",
    borderColor: "#000000",
    borderWidth: 0,
    marginLeft: 67
  },
  icon: {
    color: "rgba(236,226,95,1)",
    fontSize: 40,
    overflow: "visible",
    alignSelf: "center",
    marginTop: 20
  },
  ManualLogin: {
    width: 241,
    height: 175
  },
  Username: {
    width: 63,
    height: 11,
    color: "#121212",
    alignSelf: "stretch",
    marginLeft: 8
  },
  materialUnderlineTextbox: {
    width: 225,
    height: 36,
    backgroundColor: "rgba(230, 230, 230,1)",
    alignSelf: "stretch",
    margin: 8,
    marginLeft: 8,
    overflow: "scroll"
  },
  Password: {
    width: 111,
    height: 14,
    color: "#121212",
    marginLeft: 8
  },
  materialRightIconTextbox: {
    width: 225,
    height: 36,
    backgroundColor: "rgba(230, 230, 230,1)",
    alignSelf: "stretch",
    marginTop: 8,
    marginRight: 8,
    marginLeft: 8
  },
  Buttons: {
    width: 241,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
    marginBottom: 8
  },
  SignInButton: {
    alignSelf: "center",
    marginRight: 4,
    marginLeft: 4
  },
  LogInButton: {
    height: 36,
    marginRight: 4,
    marginLeft: 4
  },
  group3: {
    alignSelf: "stretch"
  },
  divider: {
    width: 143,
    color: "rgba(13,13,13,1)",
    alignSelf: "center",
    marginBottom: 8,
    fontSize: 12,
    textAlign: "center"
  },
  group2: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around"
  },
  Google: {
    width: 56,
    height: 56,
    backgroundColor: "rgba(242,65,65,1)",
    marginTop: 4,
    marginBottom: 4
  },
  Facebook: {
    width: 56,
    height: 56,
    marginTop: 4,
    marginBottom: 4
  }
});
