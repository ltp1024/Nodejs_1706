/*
    binary 0 1  世界上有10种人，懂二进制的不懂的
    oct    0-7
    dec    0-9
    hex    0-9 a-f  #1234ab
 */

let buffer = Buffer.from([0o141, 0o142, 0o143]); // 0x
console.log(buffer.toString()); //

let buf = Buffer.alloc(4); // 1byte = 8bits [00000000, 11111111] - [00, ff]
console.log(buf);

let buff = Buffer.from([65, 66, 67]);
console.log(buff.toString());

let buff1 = Buffer.alloc(10);
let s1 = 'AA';
let s2 = 'BB';

buff1.write(s1);
buff1.write(s2, 1);

console.log(buff1); // 41 41 00 00 ...

//cpu - memory - hard driver

console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('binary'));
console.log(Buffer.isEncoding('ascii'));
console.log(Buffer.isEncoding('hex'));
console.log(Buffer.isEncoding('base64'));

let buff2 = Buffer.from('你好！');
console.log(buff2.toString('base64'));