"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
// development will only connect to local mysql (check config.js)
var env = process.env.NODE_ENV || "development";
// production will connect to amazon db on heroku
// var env = "production";

var config = require(__dirname + "/../config/config.js")[env];
var db = {};

if (config.use_env_variable) {
  console.log("AAAAAA");
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
  // var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  console.log("BBBBBB");
  console.log(env);
  console.log(process.env.MYSQL_DB); 
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    console.log(`Registering table ${model.name}`);
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
