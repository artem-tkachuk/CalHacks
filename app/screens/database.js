import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyChrZ3JhGkEbUewo7D-VL5qE9w5Fs656ws",
  authDomain: "calhacks-9e46e.firebaseapp.com",
  databaseURL: "https://calhacks-9e46e.firebaseio.com",
  storageBucket: "calhacks-9e46e.appspot.com"
};

module.exports = {
    initialize: function()
    {
        firebase.initializeApp(firebaseConfig);
    },
    addUser: function(username)
    {
        firebase.database().ref('/users').push().set({
            name: username,
          });
    }
}

/*var Sequelize = require('sequelize-cockroachdb');
var fs = require('fs');

const sequelize = new Sequelize('postgres://michael:1998@gcp-us-east1.josh-hackathon-test.crdb.io:26257/defaultdb?sslmode=disable');
// Define the Account model for the "accounts" table.
var Event = sequelize.define('events', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
});

// Create the "accounts" table.
Event.sync({
        force: true
    })
    .then(function () {
        // Insert two rows into the "accounts" table.
        return Event.bulkCreate([{
                id: 23,
            },
            {
                id: 0,
            }
        ]);
    })
    .then(function () {
        // Retrieve accounts.
        return Event.findAll();
    })
    .then(function (events) {
        // Print out the balances.
        events.forEach(function (event) {
            console.log(event.id);
        });
        process.exit(0);
    })
    .catch(function (err) {
        console.error('error: ' + err.message);
        process.exit(1);
    });



module.exports = {
    authenticate: async function () {
        console.log("calling autheticate");
        await sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    },
};*/