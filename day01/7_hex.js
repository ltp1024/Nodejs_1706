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

//cpu - memory - hard driver