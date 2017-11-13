/**
 * Created by web-01 on 2017/11/13.
 */

const fs = require('fs');

fs.readFile('doc.md', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});