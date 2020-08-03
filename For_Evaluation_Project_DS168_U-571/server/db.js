var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Royal@21",
    database : "sihproject"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;