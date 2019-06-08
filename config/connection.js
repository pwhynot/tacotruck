const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: 'o61qijqeuqnj9chh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'eyu65v387e9e8lbz',
    password: 'k5nvv2dpdljwg0xg',
    database: 'p5i6broe7qa5mhsp'
  });
};


  connection.connect();  
  module.exports = connection;