require("dotenv").config();

module.exports = {
  "development": {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "Ngoc513*",
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "we7szheup647mu6g",
    "password": "o7hrnumhde5berps",
    "database": "o7se9a6bqr86xvy2",
    "host": "arfo8ynm6olw6vpn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "port": 3306,
    "dialect": "mysql",
    "use_env_variable": "JAWS_DB_URL",

  }
};