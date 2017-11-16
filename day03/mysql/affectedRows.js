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
    let sql = 'INSERT INTO scott.demo(username, password) VALUES ?';
    let data = [
        ['username1','password1'],
        ['username2','password2'],
        ['username3','password3']
    ];
    connection.query(sql, [data], (err, results, fields) => {
        if(err) throw err;
        console.log(results.affectedRows);
    });
    connection.release();
});