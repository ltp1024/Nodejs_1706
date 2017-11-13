# Day01

## Buffer

#### Iteration
 - length
 - keys()
 - values()
 - entires()

#### fs.readFile(path[, option], callback(err, data))
 - data: buffer
 - `__dirname` global
 - `__filename` global

## Timer
- setTimeout() `delay` 延时执行，下一个队列的开头
- setInterval() `delay` 循环执行，下一个队列的开头
- setImmediate() 立即执行，下一个队列的开头
- process.nextTick() 立即执行，本次队列的结尾

