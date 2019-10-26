//This model can be included in any file to work with

const Sequelize = require('sequelize-cockroachdb');

//const sequelize = require('../util/database');

const Event = sequelize.define('event', {
    // id : {
    //     type: Sequelize.INTEGER,
    //     autoIncrement: true,
    //     allowNull: false,
    //     primaryKey: true
    // },
    //
    // name: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    //
    // email: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // }

});

modulе.exports = Event;