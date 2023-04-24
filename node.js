// 1.node.js中无法调用DOM和BOM等浏览器内置的API
// 在终端中输入node -v可以查看安装的node版本，在node中运行javascript代码，需在终端输入node js文件路径

// 2.fs内置模块，用来操作文件
// 在javascript中使用fs模块，需要先导入
// const fs = require('fs');
// fs.readFile(path[, options], callback) 用来读取指定文件中的内容 其中参数一是必选参数，字符串，表示文件的路径；参数二为可选参数，表示以什么编码格式来读取文件，一般默认指定utf8；参数三为必选参数，文件读取完后，通过回调函数拿到读取的内容，拿到读取失败和成功的结果。实例如下：
// const fs = require("fs");
// fs.readFile("./1.txt", "utf8", function (err, dataStr) {
//   //读取成功则err为null，读取失败err值为错误对象，dataStr为undefined
//   if (err) {
//     return console.log("读取文件失败" + err.message);
//   }
//   console.log("读取成功" + dataStr); //读取的结果
// });
// fs.writeFile(file, data[, options], callback) 用来向指定的文件中写入内容 其中参数一为必选参数，指定文件路径的字符串，表示文件存放的路径；参数二为必选参数，表示要写入的内容；参数三为可选参数，表示以什么格式写入文件，默认是utf8；参数四为必选参数，文件写入完成后的回调函数。实例如下：
// const fs = require("fs");
// fs.writeFile("./2.txt", "abcd", function (err) {
//   // 写入成功err为null，写入失败err为错误对象
//   if (err) {
//     return console.log("文件写入失败" + err.message);
//   }
//   console.log("文件写入成功");
// });
// 注意：fs.writeFile()只能用来创建文件，不能用来创建路径，也就是说如果要写入的文件事先未创建但到达该文件的路径正确，该方法会自动创建写入的文件；但若中间的路径错误，会报错
// 注意：重复调用fs.writeFile()写入同一个文件，新内容会覆盖原内容

// 3.在node中__dirname 表示当前文件所处的目录

// 4.path内置模块，用来处理路径
// 在javascript中使用path模块，需要先导入
// const path = require('path');
// path.join() 用来将多个路径片段拼接成一个完整的路径字符串 实例如下：
// const path = require("path");
// const pathStr = path.join("/a", "/b/c", "../", "/d");
// console.log(pathStr); //\a\b\d
// const pathStr2 = path.join(__dirname, "./files/1.txt"); //在node中涉及到路径拼接，尽量使用path.join()处理，不要直接使用+拼接
// console.log(pathStr2); //输出1.txt完整的文件目录
// path.basename(path[, ext]) 用来从路径字符串中将文件名解析出来，获取路径的最后一部分，可通过这个方法获取路径中的文件名 path是必选参数，路径的字符串；ext为可选参数，为文件的拓展名；返回值为字符串 实例如下：
// const path = require("path");
// const fullName = path.basename("/a/b/c/index.html");
// console.log(fullName); //输出index.html
// const nameWithoutExt = path.basename("/a/b/c/index.html", ".html");
// console.log(nameWithoutExt); //输出index
// path.extname(path) 可以获取路径中的拓展名部分 path为必选参数，路径字符串；返回拓展名字符串 实例如下：
// const path = require("path");
// const fext = path.extname("/a/b/c/index.html");
// console.log(fext); //输出.html

// 5.正则匹配
// \s表示空白字符 \S表示非空白字符 *表示匹配任意次
// 匹配<style><\/style>标签的正则
// const regStyle = /<style>[\s\S]*<\/style>/
// exec()方法用来处理匹配，得到结果为数组,第0项为提取结果
// const r = regStyle.exec(htmlStr);//提取html中的<style><\/style>标签及其中的内容
// const result = r[0];//提取的css，含<style><\/style>标签
// const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />'); //将原html中的内联css改为外联css

// 6.服务器相关的概念：
// IP地址 互联网上计算机的地址，具有唯一性。IP地址格式 点分十进制(a.b.c.d)其中abcd都是0~255之间的整数。web服务器都有自己的IP地址，可以在终端ping www.baidu.com命令查看百度服务器的IP地址
// 域名和域名服务器 IP地址和域名是一一对应的，这种关系存放在域名服务器DNS（Domain name server）中，DNS提供IP和域名之间转换的服务 本地电脑作为服务器IP为127.0.0.1 域名为localhost
// 端口号 一台服务器中可运行多个web服务，每个web服务对应一个端口号，端口号不能同时被多个web服务占用，80端口可被省略

// 7.http内置模块 用来创建web服务器
// 创建web服务器的步骤
// 1.导入http模块
// const http = require('http');
// 2.创建web服务器实例
// const server = http.createServer();
// 3.为服务器实例绑定request事件，监听客户端请求
// server.on('request', function(req, res) {
// req是请求对象，包含了与客户端相关的数据和属性
// req.url 是客户端请求的URL地址(不是完整地址，而是端口号后的地址)
// req.method 是客户端的method请求类型
// res是响应对象，包含了与服务器相关的数据和属性
// res.end()方法作用：向客户端发送指定内容，并结束这次请求的处理过程
// 解决中文乱码的问题：当调用res.end()方法向客户端发送中文内容时，会出现乱码问题，此时需手动设置内容的编码格式，设置响应头Content-Type值为text/html; charset=utf-8 如下：
// res.setHeader('Content-Type', 'text/html; charset=utf-8');
//   console.log('Someone visit our web server');
// })
// 4.启动服务器
// server.listen(8080, function () {
//   console.log("server running at http://127.0.0.1:8080");
// });

// 8.node.js模块化
// 加载模块 内置模块和第三方模块加载使用require(模块名)即可，自定义模块(自定义的.js后缀的文件)加载使用require(相对路径)
// 当使用require()方法加载其他模块时，会执行被加载模块中的代码
// module对象 在每个.js自定义模块中都有一个module对象，里面存储了和当前模块有关的信息。在自定义模块中，可以使用module.exports对象，将模块内的成员共享出去，共外界使用。外界用require()方法导入自定义模块时，得到的就是module.exports所指向的对象，默认情况下module.exports为空对象，可以挂载属性供外界访问，如下：
// module.exports.username = 'zhangsan';
// 为了简化，node提供了exports对象，默认情况下，exports和module.exports指向同一个对象，最终共享的结果还是以module.exports指向的对象为准。为了防止混乱，建议在同一模块中不要同时使用exports和module.exports

// 9.CommonJS
// node.js遵循CommonJS模块化规范
// CommonJS规定：
// 每个模块内部，module变量代表当前模块；
// module变量是一个对象，其exports属性（即module.exports）是对外接口；
// 加载某个模块，其实是加载该模块的module.exports属性，require()方法用于加载模块
