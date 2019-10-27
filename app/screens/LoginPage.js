import React, { Component } from "react";
import Expo from "expo";
import { StyleSheet, View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialButtonPrimary1 from "../components/MaterialButtonPrimary1";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
export default class Login extends Component {
  signInWIthGoogelAsyc = async () => {
    try {
      console.log("sucess!!!!!!!!!");
      const result = await Expo.Google.signInWIthGoogelAsyc({
        behavior: "web",
        iosClientId:
          "556843186846-34j5hg69ubtoc7li79b6q2pi99cro6pq.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type == "success") {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Sign in with Google"
          onPress={() => this.signInWIthGoogelAsyc()}
        />
        {/* <View style={styles.rect}>
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
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 1,
    borderColor: "#000000",
    borderWidth: 0,
    justifyContent: "center"
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
