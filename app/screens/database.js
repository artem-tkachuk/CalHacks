import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyChrZ3JhGkEbUewo7D-VL5qE9w5Fs656ws",
  authDomain: "calhacks-9e46e.firebaseapp.com",
  databaseURL: "https://calhacks-9e46e.firebaseio.com",
  storageBucket: "calhacks-9e46e.appspot.com"
};

module.exports = {
  firebaseConfig: firebaseConfig,
  addUser: function(userdata) {
    firebase
      .database()
      .ref("/users")
      .push()
      .set(userdata);
  },
  getID() {
    return firebase.auth().currentUser.uid;
  },
  //   addUser: function(username)
  //   {
  //       user = firebase.database().ref('/active_users').push();
  //       userID = user.getKey();
  //       user.set({
  //           id: userID,
  //           name: username
  //       });
  //   },
  addEvent: function(title, capacity, address) {
    const userID = this.getID();
    event = firebase
      .database()
      .ref("/events")
      .push();
    unique = event.getKey();
    event.set({
      name: title,
      capacity: capacity,
      address: address, // TODO: host
      id: unique,
      pending: [],
      host: userID,
      pending: []
    });
  }
};
