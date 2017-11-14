/**
 * Created by web-01 on 2017/11/14.
 */

const http = require('http');

let server = http.createServer((req, res) => {
    res.end('server test...');
});

server.listen(80);