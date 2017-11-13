/**
 * Created by web-01 on 2017/11/13.
 */

//setImmediate((p) => {
//    console.log('set immediate...'); // 2
//}, '');


console.log('start...'); // 1

setTimeout((param) => {
    console.log('set timeout...: ' + param); // 2
}, 10000, 'test param');

sleep(2000);

console.log('end...'); // 3

function sleep(millis) {
    let start = Date.now();
    while (Date.now() - start < millis) {}
}