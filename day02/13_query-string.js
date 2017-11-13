/**
 * Created by web-01 on 2017/11/13.
 */

const queryString = require('querystring');

let string = 'q=nodejs&oq=nodejs&aqs=chrome..69i57j69i60l2j0l3.4172j0j7&sourceid=chrome&ie=UTF-8';

console.log(queryString.parse(string));

// 把 js 对象变成一个请求字符串？