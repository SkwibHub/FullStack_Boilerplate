const path = require('path');
const express = require('express');
const app = express();
const db = require('./db/database.js');
const session = require('express-session');
const passport = require('passport');

app.use('/api', require('./apiRoutes/apiIndex')); // matches all requests to /api

// logging middleware
const morgan = require('morgan');
app.use(morgan('dev'));

const volleyball = require('volleyball');
app.use(volleyball);

// parsing middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

// our server should send its index.html for any requests that don't match one of our API routes.
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(passport.initialize());
app.use(passport.session());

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
    resave: false,
    saveUninitialized: false
  })
);

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

const port = process.env.PORT || 3000;
// this can be very useful if you deploy to Heroku!

db.sync() // sync our database
  .then(function() {
    app.listen(port); // then start listening with our express server once we have synced
    console.log(`Listening on port ${port}`);
  });
