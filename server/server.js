const express = require('express');
const port = process.env.PORT || 3000;  // Google App Engine environmental variable

const app = express();

const bodyParser = require('body-parser');

const sequelize = require('./database/cockroachDB');

const welcomeRoutes = require('./routes/welcome');
const eventsRoutes = require('./routes/events');
const errorController = require('./controllers/errorController');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(welcomeRoutes);
app.use(eventsRoutes);
app.use(errorController.get404);


app.listen(port);
// sequelize.sequelizeSync(app, port);

// TODO db sync here if needed???