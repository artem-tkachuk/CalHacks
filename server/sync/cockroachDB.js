const Event = require('../models/event');
const cockroachDB = require('../database/cockroachDB').cockroachDB;

const cockroachDBSync = (app, port) => {
    cockroachDB   //Testing the DB connection
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully!');
            app.listen(port);
            console.log(`App listening on port ${port}`);
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
    cockroachDBSync: cockroachDBSync
};