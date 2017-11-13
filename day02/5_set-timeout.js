/**
 * Created by web-01 on 2017/11/13.
 */

//setImmediate(() => {
//    console.log('set immediate...'); // 2
//});


console.log('start...'); // 1

setTimeout(() => {
    console.log('set timeout...'); // 2
}, 1000);

sleep(2000);

console.log('end...'); // 3

function sleep(millis) {
    let start = Date.now();
    while (Date.now() - start < millis) {}
}