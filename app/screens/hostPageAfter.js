import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";
import MaterialButtonDanger from "../components/MaterialButtonDanger";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialHeader2 from "../components/MaterialHeader2";

export default class HostPageAfter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scrollAreaStack}>
          <View style={styles.scrollArea}>
            <ScrollView
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <Text style={styles.MyEventHeader}>My Event</Text>
              <View style={styles.MyEventInfo}>
                <Text style={styles.text2}>Event Title</Text>
                <Text style={styles.text3}>City: Berkeley</Text>
                <Text style={styles.text4}>Capacity: X</Text>
              </View>
              <Text style={styles.RequestsHeader}>Requests</Text>
              <View style={styles.Request}>
                <View style={styles.text6Row}>
                  <Text style={styles.text6}>Name</Text>
                  <MaterialButtonSuccess style={styles.materialButtonSuccess} />
                  <MaterialButtonDanger style={styles.materialButtonDanger} />
                </View>
              </View>
            </ScrollView>
          </View>
          {/* <MaterialIconTextButtonsFooter style={styles.Footer} /> */}
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
    height: 638,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    width: 420,
    height: 638
  },
  MyEventHeader: {
    color: "rgba(39,34,34,1)",
    fontSize: 24,
    // fontFamily: "roboto-700",
    textAlign: "center"
  },
  MyEventInfo: {
    width: 332,
    height: 96,
    backgroundColor: "rgba(230, 230, 230,1)",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "grey",
    shadowOpacity: 0.5
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
    marginTop: 30
  },
  Request: {
    width: 332,
    height: 80,
    backgroundColor: "rgba(230, 230, 230,1)",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "grey",
    shadowOpacity: 0.5
  },
  text6: {
    color: "rgba(39,34,34,1)",
    fontSize: 16,
    // fontFamily: "arial",
    marginTop: 13
  },
  materialButtonSuccess: {
    width: 88,
    height: 36,
    marginLeft: 38
  },
  materialButtonDanger: {
    width: 88,
    height: 36,
    marginLeft: 28
  },
  text6Row: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 25,
    marginTop: 22
  },
  Footer: {
    top: 694,
    left: 0,
    width: 420,
    height: 87,
    position: "absolute"
  },
  Header: {
    top: 0,
    left: 0,
    width: 420,
    height: 56,
    position: "absolute"
  },
  scrollAreaStack: {
    width: 420,
    height: 781,
    marginTop: 31
  }
});
