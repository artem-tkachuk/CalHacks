import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialSearchBar1 from "../components/MaterialSearchBar1";
import MaterialHeader2 from "../components/MaterialHeader2";
import * as database from './database.js';
import * as firebase from 'firebase';

class Event extends Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (<View style={styles.Event}>
              <View style={styles.textColumnRow}>
                <View style={styles.textColumn}>
                  <Text style={styles.text}>{this.props.name}</Text>
                  <Text style={styles.text2}>City: Berkeley</Text>
                </View>
                <MaterialButtonViolet style={styles.materialButtonViolet} />
              </View>
              <Text style={styles.text3}>{this.props.capacity}</Text>
            </View>);
  }
}

export default class HomePage extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      events: []
    }
    this.updateEvents = this.updateEvents.bind(this);
  }

  updateEvents(snapshot)
  {
    if(snapshot.exists())
    {
      var all_events = []
      snapshot.forEach((child) => {
        all_events.push({name: child.val()["name"], capacity: child.val()["capacity"]});
      });
      this.setState({events: all_events})
    }
  }

  componentWillMount()
  {
    this.state.events = [];
    database.initialize();
    firebase.database().ref('/events').on('value', this.updateEvents);
  }

  render() {
    //database.addUser("manlai");
    const events = this.state.events.map((item, key) =>
    <Event key={key} name={item.name} capacity={item.capacity}/>);

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
                {events}
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
    width: 375,
    height: 582,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    width: 375,
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
    width: 332,
    height: 96,
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
    width: 119,
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
    width: 375,
    height: 87,
    position: "absolute"
  },
  SearchBar: {
    top: 0,
    left: 0,
    width: 375,
    height: 56,
    position: "absolute"
  },
  scrollAreaStack: {
    top: 56,
    left: 0,
    width: 375,
    height: 725,
    position: "absolute"
  },
  Header: {
    top: 0,
    left: 0,
    width: 375,
    height: 56,
    position: "absolute"
  },
  scrollAreaStackStack: {
    width: 375,
    height: 781,
    marginTop: 31
  }
});
