import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import MaterialHeader2 from "../components/MaterialHeader2";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import * as database from "./database.js";
import * as firebase from "firebase";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";
import MaterialButtonDanger from "../components/MaterialButtonDanger";
import {
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native-gesture-handler";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent = () => {
    this.setState = {
      show: false
    };
  };

  render() {
    return (
      <View>
        {this.state.show ? (
          <View style={styles.text6Row}>
            <Text style={styles.text}>{this.props.name}</Text>
            <View
              style={{
                flexDirection: "row",
                alignContent: "space-around",
                alignSelf: "stretch",
                padding: 10
              }}
            >
              <MaterialButtonSuccess
                style={styles.materialButtonSuccess}
              />

              <MaterialButtonDanger
                style={styles.materialButtonDanger}
              />
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

class HostPageAfter extends Component {
  
  constructor(props) {
    super(props);
    this.updateRequests = this.updateRequests.bind(this);
    this.getUserName = this.getUserName.bind(this);
    this.setState({ title: "", capacity: "", address: "", requests: [], i: 0});

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

  getUserName(uid)
  {
    
    return "Artem";
  }

  updateRequests(snapshot) {
    if (snapshot.exists()) {
      var all_requests = [];
      snapshot.forEach(child => {
        console.log(database.getID());
        if (child.val()["host"] == database.getID()) {
          console.log("Checking here!");
          console.log(child.val()["pending"]);
          let keys = Object.values(child.val()["pending"]);
          console.log(keys);
          keys.forEach(key => {
            all_requests.push({
              name: key
            });
          });
        }
      });

      this.setState({ requests: all_requests });
    }
  }

  componentWillMount() {
    this.state.requests = [];

    firebase
      .database()
      .ref("/events")
      .on("value", this.updateRequests);
  }

  render() {
    const requests = this.state.requests.map((item, key) => (
      <Request key={key} name={this.getUserName(item.name)} />
    ));

    return (
      <View style={styles.containerAfter}>
        <MaterialHeader2 style={styles.Header} />
        <View style={styles.scrollAreaStack}>
          <View style={styles.scrollArea}>
            <ScrollView
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <ScrollView>
                <Text style={styles.MyEventHeader}>My Event</Text>
                <View style={styles.MyEventInfo}>
                  <Text style={styles.text2}>Title: {this.state.title}</Text>
                  <Text style={styles.text3}>
                    Address: {this.state.address}
                  </Text>
                  <Text style={styles.text4}>
                    Capacity: {this.state.capacity}
                  </Text>
                </View>
                <Text style={styles.RequestsHeader}>Requests</Text>
                {requests}
              </ScrollView>
            </ScrollView>
          </View>
          {/* <MaterialIconTextButtonsFooter style={styles.Footer} /> */}
        </View>
      </View>
    );
  }
}

class HostPageBefore extends Component {
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
    if (
      this.state.title == "" ||
      this.state.capacity == "" ||
      this.state.address == ""
    )
      return;
    database.addEvent(
      this.state.title,
      this.state.capacity,
      this.state.address
    );
    this.props.eventCallback(true);
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
                <ScrollView>
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
                    keyboardType={"numper-pad"}
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
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default class Combiner extends Component {
  constructor(props) {
    super(props);
    this.setEventHosted = this.setEventHosted.bind(this);
    firebase
      .database()
      .ref("/events")
      .on("value", snapshot => {
        if (snapshot.exists()) {
          snapshot.forEach(child => {
            if (child.val()["host"] == database.getID()) {
              this.state = { eventHosted: true };
              return;
            }
          });
        }
      });
    this.state = { eventHosted: false };
  }

  setEventHosted(val) {
    this.setState({ eventHosted: val });
  }

  render() {
    if (this.state.eventHosted) return <HostPageAfter />;
    else return <HostPageBefore eventCallback={this.setEventHosted} />;
  }
}

var styles = StyleSheet.create({
  containerAfter: {
    flex: 1
    //display: "flex"
  },
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
    height: 682,
    backgroundColor: "rgba(255,255,255,1)"
    // position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    width: 420,
    height: 696
  },
  scrollAreaStack: {
    top: 0,
    left: 0,
    width: 420,
    alignSelf: "stretch"
    // position: "absolute"
  },
  scrollAreaStackStack: {
    width: 420,
    alignSelf: "stretch",
    marginTop: 31
  },
  MyEventHeader: {
    color: "rgba(39,34,34,1)",
    fontSize: 24,
    // fontFamily: "roboto-700",
    textAlign: "center",
    marginTop: 25
  },
  MyEventInfo: {
    flexDirection: "column",
    width: 332,
    height: "auto",
    backgroundColor: "rgba(230, 230, 230,1)",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    padding: 10
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
    marginTop: 20
  }
});
