// This file connects to your mysql workbench along with your jawsdb from heroku
var mysql = require('mysql');
var connection;

if (process.env.JAWS_DB_URL) {
    console.log("JJJJJ")
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local. Be sure to change the password so you can connect the db to your workbench
    console.log("WWWWW")
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'Ngoc513*',
        database: 'wishmaker_db'
    })
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
