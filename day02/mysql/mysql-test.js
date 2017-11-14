///**
// * Created by web-01 on 2017/11/13.
// */
//
//const mysql = require('mysql');
//
//let connection = mysql.createConnection({
//    user: 'root',
//    password: ''
//});
//
//connection.connect((err) => {
//    if (err) throw err;
//    console.log(connection.threadId);
//});
//
//connection.query('SELECT * FROM xuezi.user', (err, results, fields) => {
//    if(err) throw err;
//    console.log(results);
//});


const mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'root'
});

connection.connect((err) => {
    if(err) throw err;
    let sql = 'INSERT INTO xuezi.user VALUES(NULL, ?, ?, ?, ?, ?, ?, ?)'
    connection.query(sql, ['a','b','c','d','e','f','g'], (err, results, fields) => {
        if(err) throw err;
        console.log(results.affectedRows);
        console.log(results.insertId);
    });
});
