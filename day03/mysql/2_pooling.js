/**
 * Created by web-01 on 2017/11/14.
 */
/* pool: ³ØÌÁ ³Ø»¯¼¼Êõ */

const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root'
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    let uname = "' or 'a'='a";
    let upwd = "' or 'a'='a"; // SQL Injection.
    let sql = 'SELECT * FROM xuezi.user WHERE uname=? AND upwd=?';
    connection.query(sql, [uname, upwd], (err, results, fields) => {
        if (err) throw err;
        console.log(results);
    })
    connection.release();
});