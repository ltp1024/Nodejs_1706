/**
 * Created by web-01 on 2017/11/14.
 */
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
    let sql = 'select ename from scott.emp LIMIT 3 OFFSET 0';
    connection.query(sql, (err, results, fields) => {
        if(err) throw err;
        console.log(results);
    });
});