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

// 10.npm 安装包
// 安装命令： npm install 包的完整名称 可简写为：npm i 包的完整名称
// 使用时，require导入包，就是装包的名称，注意是字符串
// 初次装包完成后，项目中多了一个node_modules文件夹(用来存放所有安装到项目中的包，require导入第三方包时，就是从这个文件夹中查找并加载)和package-lock.json的配置文件(记录node_modules下每一个包的信息)
// 安装指定版本号的包使用@符号，例如：
// npm i moment@2.22.2
// 包管理配置文件 npm init -y 命令可在执行命令所处目录中创建package.json这个包管理配置文件
// 一次安装多个包时，用空格隔开 例如：
// npm i jquery moment
// 一次性安装所有包，可以运行npm install或npm i
// 卸载包 npm uninstall 具体包的名称
// npm i 包名 -D或npm install 包名 --save-dev 会将包安装到devDependencies节点中
// 全局包 安装全局包：npm i 包名 -g 卸载全局包：npm uninstall 包名 -g

// 11.express第三方模块(创建web服务器)
// 安装 npm i express
// 创建基本的web服务器步骤：
// 导入express
// const express = require("express");
// 创建web服务器
// const app = express();
// 监听get请求 app.get('请求URL', function(req, res) {处理函数})方法监听客户端的GET请求
// 监听post请求 app.post('请求URL', function(req, res) {处理函数})监听客户端post请求
// 在get、post请求的处理函数中通过res.send()方法把处理好的内容发送给客户端
// 获取URL中携带的查询参数 req.query对象可以访问到客户端通过查询字符串形式（?name=zs&age=20 这种形式）发送到服务器的参数（req.query.name req.query.age）
// 获取URL中的动态参数 req.params对象可以访问到URL（例如 '/user/:id/:name'）中通过:匹配到的动态参数
// 托管静态资源 express.static()
// 将public目录下的文件对外开放，托管后可访问http://localhost:3000/images/bg.jpg等，注意：存放静态文件的目录名不会出现在URL中（如这里的public）
// app.use(express.static('public'))
// 托管多个静态资源 多次调用express.static()函数
// app.use(express.static('public'));
// app.use(express.static('files'));
// 挂载路径前缀 在托管的静态资源访问路径之前，挂载路径前缀，如下：
// app.use("/public", express.static("public"));//现在可以访问http://localhost:3000/public/images/bg.jpg等
// 调用app.listen(端口号，启动成功后的回调函数)，启动服务器
// app.listen(80, () => {
//   console.log("express server running at http://127.0.0.1");
// });

// 12.express中的路由(客户端的请求与服务器处理函数之间的映射关系)，由3部分组成：请求类型、请求的URL地址、处理函数。格式：app.METHOD(PATH< HANDLER)
// 路由匹配是按照定义的先后顺序进行匹配，请求类型和请求的URL同时匹配成功才会调用对应的处理函数
// express中路由不建议直接挂载到app上，推荐将路由抽离为单独模块，步骤如下：
// 创建路由单独的js文件， 例如user.js
// 调用express.Router()函数创建路由对象
// const express = require("express");
// const router = express.Router();
// 向路由对象上挂载具体路由
// router.get("/user/list", function (req, res) {
//   res.send("Get user list");
// });
// router.post("/user/add", function (req, res) {
//   res.send("Add new user");
// });
// 使用module.exports向外共享路由对象
// module.exports = router;
// 导入路由模块，使用app.use()函数注册路由模块
// const userRouter = require("./router/user.js");
// app.use(userRouter); //app.use()就是来注册全局中间件

// 13.为路由模块添加前缀，类似于托管静态资源时，为静态资源挂载访问前缀一样
// app.use("/api", userRouter);

// 14.中间件 本质上是函数，对请求进行预处理
// express中间件格式：function(){}为中间件
// app.get("/", function (req, res, next) {
//   next(); //next()函数作用：实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由
// });
// 中间件函数的形参列表中，必须包含next参数，而路由处理函数中只包含req和res

// 15.定义中间件函数
// const mw = function (req, res, next) {
//   next();
// };

// 16.全局中间件 客户端发起的任何请求，到达服务器后都会触发的中间件，通过调用app.use(中间件函数)即可定义一个全局中间件
// app.use(mw);
// 也可以将中间件函数定义和app.use()写在一起
// app.use(function (req, res, next) {
//   next();
// });

// 17.多个中间件（包括路由）之间，共享同一份req和res，所以可以在上游的中间件中，为req或res对象添加自定义属性或方法，供下游的中间件或路由进行使用
// 可以使用app.use()连续定义多个全局中间件，客户端请求到达服务器后，会按照中间件定义的先后顺序依次进行调用，例如：
// app.use(function (req, res, next) {
//   console.log("全局中间件1");
//   next();
// });
// app.use(function (req, res, next) {
//   console.log("全局中间件2");
//   next();
// });
// app.get("/user", function (req, res) {
//   console.log("请求这个路由会依次触发上述两个全局中间件");
//   res.send("hi");
// });

// 18.局部中间件 不使用app.use()定义的中间件
// const mw1 = function (req, res, next) {
//   next();
// };
// app.get("/", mw1, function (req, res) {
//   res.send("使用局部中间件mw1");
// });
// app.get("/user", function (req, res) {
//   res.send("没有使用局部中间件mw1");
// });
// 定义多个局部中间件，有两种等价方法使用多个局部中间件
// app.get("/", mw1, mw2, function (req, res) {
//   res.send();
// });
// app.get("/", [mw1, mw2], function (req, res) {
//   res.send();
// });

// 19.中间件的5个使用注意事项
// 一定要在路由之前注册中间件（错误级别中间件在所有路由之后）
// 客户端发送过来的请求，可以连续调用多个中间件进行处理
// 执行完中间件的业务代码之后，不要忘记调用next()函数
// 调用next()函数后不要写额外的代码
// 连续调用多个中间件时，多个中间件之间共享req和res对象

// 20.错误级别中间件：用来捕获整个项目中发生的异常错误，防止项目异常崩溃
// 格式:错误级别中间件的function处理函数中，必须有4个形参，依次为err,req, res, next
// app.get("/", function (req, res) {
//   throw new Error("服务器内部发生了错误");
//   res.send("home page");
// });
// app.use(function (err, req, res, next) {
//   console.log("发生了错误：" + err.message);
//   res.send("Error" + err.message);
// });
// 注意：错误级别中间件必须注册在所有路由之后

// 21.express内置的3个中间件
// (1)express.static 托管静态资源，见上面的笔记
// (2)express.json解析JSON格式的请求体数据
// app.use(express.json());//通过express.json()这个中间件解析表单中的JSON格式数据
// app.post("/", function (req, res) {
//   // 如果客户端发送了json格式的请求体数据，可以使用req.body这个属性来接受客户端发送过来的请求体数据(JSON格式、url-encoded格式)，默认情况下，如果不配置解析表单数据的中间件，则req.body默认为undefined
//   console.log(req.body);
//   res.send("ok");
// });
// (3)express.urlencoded解析URL-encoded格式的请求体数据
// app.use(express.urlencoded({ extended: false })); //通过express.urlencoded()这个中间件解析表单中的url-encoded格式数据
// app.post("/book", function (req, res) {
//   // 如果客户端发送了url-encoded格式的请求体数据，可以使用req.body这个属性来接受客户端发送过来的请求体数据(JSON格式、url-encoded格式)，默认情况下，如果不配置解析表单数据的中间件，则req.body默认为undefined
//   console.log(req.body);
//   res.send("ok");
// });

// 22.使用express写接口
// 1.创建基本的服务器 例如app.js
// 2.创建API路由模块 例如apiRouter.js
// 3.编写GET接口
// 4.编写POST接口
// 5.解决接口跨域问题：1）CORS(主流方案) 2）JSONP(有缺陷，只支持GET请求)
// （一）使用cors中间件解决跨域问题：1）安装 npm i cors 2）使用const cors = require('cors')导入 3）在路由之前调用app.use(cors())配置中间件
// CORS 跨域资源共享 由一系列的响应头组成：
// 1）响应头Access-Control-Allow-Origin
// res.setHeader('Access-Control-Allow-Origin', 'URL')//设置只允许来自指定URL的请求，如果URL为通配符*，则允许来自任何域的请求，例如res.setHeader('Access-Control-Allow-Origin', '*')
// 2）响应头Access-Control-Allow-Headers
// 默认情况下，CORS只支持客户端发送9种请求头，如果发送了额外的请求头，需在服务器端通过Access-Control-Allow-Headers对额外的请求头进行声明，例如res.setHeader('Access-Control-Allow-Headers', 'x-Custom-Header')//允许客户端额外向服务器发送x-Custom-Header请求头
// 3）响应头Access-Control-Allow-Methods
// 默认情况下，CORS仅支持客户端发起GET、POST、HEAD请求，如果客户端希望通过PUT、DELETE等方式请求服务器的资源，则需要在服务器端，通过Access-Control-Allow-Methods来指明实际请求所允许使用的HTTP方法，例如：
res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, HEAD"); //只允许POST, GET, DELETE, HEAD请求方法
res.setHeader("Access-Control-Allow-Methods", "*"); //允许所有的HTTP请求方法
// （二）JSONP 浏览器通过<script>标签的src属性请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求数据的方式为JSONP。特点：JSONP不属于AJAX请求，没有使用XMLHttpRequest对象；其次，JSONP仅支持GET请求，不支持POST、PUT、DELETE等请求
// app.js代码：
const express = require("express");
const app = express();
const apiRouter = require("./apiRouter.js");
app.use(express.urlencoded({ extended: false }));
const cors = require("cors");
app.use(cors());
app.use("/api", apiRouter);
app.listen(80, function () {
  console.log("Express server running at http://127.0.0.1");
});
// apiRouter.js代码：
const express = require("express");
const apiRouter = express.Router();
apiRouter.get("/get", function (req, res) {
  //挂载路由
  const query = req.query;
  res.send({
    status: 0, //0表示成功， 1表示失败
    msg: "GET请求成功", //状态描述
    data: query, //需要响应给客户端的数据
  });
});
apiRouter.post("/post", function (req, res) {
  //挂载路由
  const body = req.body;
  res.send({
    status: 0,
    msg: "POST请求成功",
    data: body,
  });
});
module.exports = apiRouter;

// 23.在项目中操作mysql
// 1)安装操作mysql数据库的第三方模块mysql
// npm i mysql
// 2)通过mysql模块连接到mysql数据库
const mysql = require("mysql"); //导入mysql模块
const db = mysql.createPool({
  //建立与mysql数据库的连接
  host: "127.0.0.1", //数据库的IP地址
  user: "root", //登录数据库的账号
  password: "admin123", //登录数据库的密码
  database: "my_db_01", //指定要操作哪个数据库
});
// 3)通过mysql模块执行SQL语句
// 调用db.query()函数，指定要执行的SQL语句，通过回调函数拿到执行的结果
// （1）查询数据
const sqlStr1 = "select * from users";
db.query(sqlStr1, function (err, results) {
  if (err) return console.log(err.message);
  //注意：如果执行的是select查询语句，则执行的结果results是数组
  console.log(results);
});
// （2）插入数据
const user = { username: "zhangsan", password: "111" };
// 待执行的sql语句，其中?表示占位符
const sqlStr2 = "insert into users (username, password) values (?, ?)";
// 使用数组的形式，依次为?占位符指定具体的值
db.query(sqlStr2, [user.username, user.password], function (err, results) {
  if (err) return console.log(err.message);
  //注意：如果执行的是insert into插入语句，则执行的结果results是一个对象，可以通过affectedRows属性来判断是否插入数据成功
  if (results.affectedRows === 1) {
    console.log("插入数据成功");
  }
});
// 以上较麻烦，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据
const user1 = { username: "lisi", password: "222" };
const sqlStr3 = "insert into users set ?";
db.query(sqlStr3, user1, function (err, results) {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("插入数据成功");
  }
});
// （3）更新数据
const user2 = { id: 7, username: "aaa", password: "000" };
const sqlStr4 = "update users set username=?, password=? where id=?";
db.query(
  sqlStr4,
  [user2.username, user2.password, user2.id],
  function (err, results) {
    if (err) return console.log(err.message);
    //注意：如果执行的是update更新语句，则执行的结果results也是一个对象，可以通过affectedRows属性来判断是否更新数据成功
    if (results.affectedRows === 1) {
      console.log("更新数据成功");
    }
  }
);
// 以上较麻烦，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速更新数据
const user3 = { id: 7, username: "aaa", password: "000" };
const sqlStr5 = "update users set ? where id=?";
db.query(sqlStr5, [user3, user3.id], function (err, results) {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("更新数据成功");
  }
});
// （4）删除数据
const sqlStr6 = "delete from users where id=?";
// 如果待执行的sql语句中有多个占位符，则必须使用数组为每个占位符指定具体的值，如果只有一个占位符，可以省略数组
db.query(sqlStr6, 7, function (err, results) {
  //删除id为7的数据
  if (err) return console.log(err.message);
  //注意：如果执行的是delete删除语句，则执行的结果results也是一个对象，可以通过affectedRows属性来判断是否删除数据成功
  if (results.affectedRows === 1) {
    console.log("删除数据成功");
  }
});
// 标记删除
// 使用delete语句会真正把数据从表中删除，为了保险起见，推荐使用标记删除的形式，来模拟删除的动作，就是在表中设置类似于status这样的状态字段，来标记当前这条数据是否被删除，当用户执行删除动作时，并没有执行delete语句把数据删除掉，而是执行update语句将这条数据对应的status字段标记为删除即可。
const sqlStr7 = "update users set status=1 where id=?";
db.query(sqlStr7, 6, function (err, results) {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("删除数据成功");
  }
});
