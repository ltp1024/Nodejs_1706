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

## Module
- 核心模块
- 第三方模块
- 自定义模块
	- 文件模块
	- 目录模块
		- `index.js`
		- `package.json`

- 模块的使用
	- `exports` 导出
	- `require` 引入

# Day02

## NPM
```
npm install <package-name>
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm init
npm install
```

# day03

## querystring
 - `parse()`
 - `stringify()`

## url
 - `parse()`
 - `format()`

## util
 - `isXxx()`

## fs
 - 同步操作和异步操作的区别
 - `readFile()`
 - `readFileSync()`
 - `stat()`
 - `readdir()`

 ---
 ## Github

 1. fiel-settings-git-test [https://git-scm.com/](https://git-scm.com/)
 2. fiel-settings-github-password-test
 3. C:\Users\web-01\.gitconfig

 ```
 [user]
     name = thu
     email = mingfei.net@gmail.com
 ```

 4. .gitignore
 5. VCS-import...-share project on github
