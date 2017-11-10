/**
 * Created by web-01 on 2017/11/10.
 */

const http = require('http');

let server = http.createServer((req, res) => {
    res.end('hi...')
});

server.listen('80');

// http://thu.github.com/IDEA