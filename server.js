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

// Defined middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
