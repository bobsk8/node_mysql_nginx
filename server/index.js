var express = require('express');
var app = express();
var mysql = require('mysql');

// app.get('/', function(req, res) {
//     var connection = mysql.createConnection({
//       host     : 'db_mysql',
//       user     : 'mysql_user',
//       password : 'mysql_pass'
//     });
//     connection.connect(function(err) {
//         if (err) {
//             res.send('Could not connect to MySQL ' + err.stack);
//         } else {
//             res.send('Connected to MySQL - Thread ' + connection.threadId);
//         }
//     });
// });

app.disable('x-powered-by');

app.get('/', function(req, res) {
    res.send('Foi');
    console.log('Foiiii')
});

app.listen(3000);
