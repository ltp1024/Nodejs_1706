/**
 * Created by web-01 on 2017/11/10.
 */

// buffer »º³åÇø

let buff1 = new Buffer(1024); // ×Ö½Ú byte Î» bit  1byte = 8bits
console.log(buff1); // 00 = 8bits   00000000 - 11111111  HEX 0-9 a,b,c,d,e,f

let buff2 = new Buffer([65, 66, 67]);
console.log(buff2);

let buff3 = new Buffer('ABCa');
console.log(buff3);

let buff4 = Buffer.allocUnsafe(16);
console.log(buff4);
