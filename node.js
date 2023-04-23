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

// 3.在node中__dirname 表示当前文件所处的目录

// 4.path内置模块，用来处理路径
