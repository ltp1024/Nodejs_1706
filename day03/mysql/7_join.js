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
    let sql = 'select e.ename AS 员工姓名, d.dname AS 部门名称 from scott.emp e inner join scott.dept d ON e.deptno=d.deptno';
    connection.query(sql, (err, results, fields) => {
        if(err) throw err;
        console.log(results);
    });
});