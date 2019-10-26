const Sequelize = require('sequelize-cockroachdb');

const Event = require('../models/event'); //sequelize model of event
//const firstUser = require('../keys/firstUser');
const cockroackUri = require('../config/cockroachDB');

// const config = require('../config/cockroachDB');
// const {name, username, password} = require('../keys/credentials');

const sequelize = new Sequelize(cockroackUri);

const sequelizeSync = (app, port) => {
    sequelize   //Testing the DB connection
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully!');
        })
        .catch(err => {
            console.log('Unable to connect to the database', err);
        });

    // sequelize.sync(/*{force: true}*/)
    //     .then(result => {
    //         return User.findByPk(1);
    //     })
    //     .then(async (user) => {
    //         if (!user) {
    //             firstUser.password = await hash(firstUser.password);
    //             return User.create(firstUser);
    //         }
    //         return user;
    //     })
    //     .then(user => {
    //         console.log('users table now exists!');
    //     })
    //     .catch(err => console.log(err));
};

module.exports = {
    sequelize: sequelize,
    sequelizeSync: sequelizeSync
};