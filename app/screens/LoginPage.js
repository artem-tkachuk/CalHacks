import React, { Component } from "react";
import * as Google from 'expo-google-app-auth';
import { StyleSheet, View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialButtonPrimary1 from "../components/MaterialButtonPrimary1";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import firebase from 'firebase';

export default class Login extends Component {

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  onSignIn = (googleUser) => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        firebase
            .auth()
            .signInAndRetrieveDataWithCredential(credential)
            .then((result) => {
              console.log("User signed in!");
              if (result.additionalUserInfo.isNewUser) {
                firebase
                    .database
                    .ref('/active_users' + result.user.uid)
                    .set({
                      gmail: result.user.email,
                      profile_picture: result.additionalUserInfo.profile.picture,
                      first_name: result.additionalUserInfo.profile.given_name,
                      last_name: result.additionalUserInfo.profile.family_name,
                      created_at: Date.now()
                    })
                    .then((snapshot) => {
                      console.log('Snapshot', snapshot);
                    });
              }
            })
            .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        firebase.database.ref('/active_users' + result.user.uid)
            .update({
              last_logged_in: Date.now()
            });
        console.log('User already signed-in Firebase.');
      }
    }.bind(this));
  }
  signInWIthGoogelAsyc = async () => {
    try {
      console.log("sucess!!!!!!!!!");
      const result = await Google.logInAsync({
        behavior: "web",
        iosClientId:
          "556843186846-34j5hg69ubtoc7li79b6q2pi99cro6pq.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type == "success") {
        this.onSignIn(result);
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
