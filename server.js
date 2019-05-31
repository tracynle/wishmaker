require("dotenv").config();
// using express to get our own api routes
const express = require("express");
// use the routes folder
const routes = require("./routes");
// initialize express object
const app = express();
// whatever is in the environment variable PORT, or 9001 if there's nothing there
const PORT = process.env.PORT || 9001;
// use the modals folder
const db = require("./models");
// ... other imports 
const path = require("path");

// using express-session, it stores information about the current "session" of the user once they login
// https://flaviocopes.com/express-sessions/
const session = require('express-session');
// Passport is used for authentication
const passport = require('passport');

// Defined middleware here. Set up middlewares in the order you want the server to use 
// Order matters! These are used first
app.use(express.urlencoded({ extended: true }));
// This makes the json accessible
app.use(express.json());

// session is defined as a middleware and it is being used here
// server 'uses' the session middleware 
app.use(session({ secret: 'super duper long unguessable secret 1234567890', resave: false, saveUninitialized: false }));
// other passport middlewares that are used for authentication
// need to look up what they do specifically
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
// Server setting up different ways to authenticate where it is defined in the config passport.js file
require('./config/passport');

// requests are passed through the routes index.js file once the data has been manipulated from the middlewares. 
routes(app);

//serve up static assests on heroku
console.log(`process.env.NODE_ENV ==>> ${process.env.NODE_ENV}`);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))


// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });

})
.catch((err) => {
    console.log(err);
});
