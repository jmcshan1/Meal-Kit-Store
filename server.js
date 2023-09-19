//required dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const controller = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//create express app
const app = express();
const PORT = process.env.PORT || 3001;

//create handlebars engine
const hbs = exphbs.create({ helpers });

//create session
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//use session
app.use(session(sess));

//set up handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//set up express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//set up routes
app.use(controller);

//set up sequelize and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});
