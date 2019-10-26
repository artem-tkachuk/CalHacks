const fs = require('fs');

const db = 'defaultdb';
const user = 'artem';
const password = '12345';

const dialectOptions = {
    dialect: 'postgres',
    port: 26257,
    logging: false,
    host: 'gcp-us-east1.josh-hackathon-test.crdb.io',
    dialectOptions: {
        ssl: {
            ca: fs.readFileSync('server/certs/josh-hackathon-test-ca.crt').toString()
        }
    }
};



module.exports = {
    db: db,
    user: user,
    password: password,
    dialectOptions: dialectOptions
};