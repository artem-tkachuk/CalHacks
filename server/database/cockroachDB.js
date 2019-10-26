const Sequelize = require('sequelize-cockroachdb');
const fs = require('fs');
const Event = require('../models/event'); //sequelize model of event
const cockroackDBConfig = require('../config/cockroachDBconfig');

const cockroachDB = new Sequelize(cockroackDBConfig.db, cockroackDBConfig.user, cockroackDBConfig.password, cockroackDBConfig.dialectOptions);

module.exports = {
    cockroachDB: cockroachDB
};