/**
 * Created by web-01 on 2017/11/13.
 */

console.log('start...'); // 1

//setTimeout(() => {
//    console.log('set timeout...'); // 2
//}, 1000);

setImmediate(() => {
    console.log('set immediate...');
});

console.log('end...'); // 3