/**
 * Created by web-01 on 2017/11/14.
 */
const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root'
});

pool.getConnection((err, connection) => {
    if(err) throw err;
    let sql = 'insert into scott.demo values(null, ?, ?)';
    connection.query(sql, ['Jerry', '456'], (err, results, fields) => {
        if(err) throw err;
        console.log(results.affectedRows);
        console.log(results.insertId);
    });
});