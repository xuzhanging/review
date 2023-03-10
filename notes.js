//1 javascript 7种初始类型 Number String Boolean Undefined Null Symbol(unique and cannot be changed) BigInt

//2 javascript 幂运算 2 ** 3(2 * 2 * 2)

//3 javascript 模板字符串 `I'm ${firstName}` 注意反引号

//4 javascript 类型转换和强制转换
//Number('1991')  String转Number
//String(23) Number转String
//'1' + '2' 输出'12'(字符串)
//'2' - '1' 输出1(数字)
//'6' / '2' 输出3(数字)
//javascript 5 falsy values(虚值):0, '', undefined, null, NaN
//Boolean(0) Number转Boolean

//5 javascript == vs. ===, != vs.!==
//===要求值和类型都相同(严格)，==存在强制类型转换(不严格),!==要求值和类型都不相同(严格)，==存在强制类型转换(不严格)

//6 javascript strict mode 在script中的最上面加上'use strict'

//7 javascript 函数的两种定义
//定义一(定义可以在调用前，也可以在调用后)
//const age1 = calcAge1(2000);
// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }
//定义二(匿名函数，只能先定义后调用，调用不能在定义前)
// const calcAge2 = function(birthYear) {
//     return 2022 - birthYear;
// }
// const age2 = calcAge2(2000);

//8 javascript 箭头函数
// const calAge3 = birthYear => 2022 - birthYear;
// console.log(calAge3(2000));
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(2000, 'Jonas'));

//9 javascript 数组
//创建数组的两种方式
//方式一 const friends = ['Michael', 'Steven', 'Peter'];
//方式二 const years = new Array(1991, 1984, 2008, 2020);
//常用的数组方法
//push() 在数组末尾添加元素,改变原来的数组,并返回新数组的长度
//unshift() 在数组开头添加元素，改变原来的数组，并返回新数组的长度
//pop() 删除数组最后一个元素，改变原来的数组，并返回删除的元素
//shift() 删除数组第一个元素，改变原来的数组，并返回删除的元素
//indexOf() 返回数组中特定元素的索引（下标），若没有该元素，返回-1
//includes() 查询数组是否包含特定的元素，若包含返回true,否则返回false,注意此方法是es6新增方法，要求值和类型均相同时才返回true
//concat() 用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

//10 javascript 对象
//访问对象属性的两种方式 .和[]
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'sch',
//     age: 2022 - 2000,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas.firstName);
// console.log(jonas['lastName']);
// const keyName = 'Name';
// console.log(jonas['first' + keyName]);
//给对象添加属性的两种方式 .和[]
// jonas.location = 'China';
// jonas['tel'] = 123456;
//对象中的方法
//对象中的方法含有一个this，指向该方法的调用者
// const jonas = {
//     bitrhYear: 1991,
//     calcAge: function() {
//         console.log(this);
//         return 2022 - this.bitrhYear;
//     }
// };
// console.log(jonas.calcAge());
// console.log(jonas['calcAge']());

//11 javascript 伪随机数
// Math.random()返回一个浮点数，伪随机数在范围从0 到小于1，也就是说，从 0（包括 0）往上，但是不包括 1（排除 1）
// Math.trunc()会将数字的小数部分去掉，只保留整数部分
//let dice = Math.trunc(Math.random() * 6) + 1; 产生1-6的随机数

//12 let const 是块级作用域，var归于离其最近的函数作用域,var声明的变量会被提升，而let和const不会，用var声明的变量会被添加为全局对象window上的属性

//13 函数作为方法（对象中的方法（非箭头函数））调用时，this指向调用该方法的对象（object）;
//一般的函数调用时，在严格模式下this指向undefined,在非严格模式下this指向window；
//箭头函数没有自己的this，若箭头函数中出现了this，则this是父作用域的this;
//函数作为事件监听的绑定函数调用时，this指向处理函数附加到的dom元素上
//this不指向函数本身
//全局作用域下的this指向window
//注意，字面量创建对象的{}不是一个区域块，所以在对象中的箭头函数中的this并不指向该对象，而是指向其父作用域
// const jonas = {
//     firstName: 'Jonas',
//     greet: ()=> console.log(`Hey ${this.firstName}`)
// };
// jonas.greet(); //Hey undefined,箭头函数中的this指向window

//14 arguments关键字只存在常规函数中，箭头函数中没有

//15 解构数组
// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c);
// const [x, y] = arr;
// console.log(x, y);
// const [first, , second] = arr;
// console.log(first, second);
//嵌套解构
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
//默认的解构值
// const [p = 1, q = 2, r = 3] = [4, 5];
// console.log(p, q, r);

//16 解构对象
//对象中的元素没有顺序，所以解构时，顺序无关，解构的变量名为对象中的属性名，也可以重命名
// const person = {
//     firstName: 'Jonas',
//     age: 18,
//     address: 'China'
// };
// const {firstName, address, age} = person;
// console.log(firstName, address, age);
// const {firstName: personName} = person;//重命名
// console.log(personName);
// const {lastName = '', address: location = ''} = person;//设默认值
//改变变量的值
// let a = 1;
// let b = 2;
// const obj = {
//   a: 3,
//   b: 4
// };
// ({a, b} = obj); //注意加括号
// console.log(a, b);
//嵌套解构
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3
//     }
// };
// const {b: {c, d}} = obj;
// console.log(c, d);

//17 扩展运算符
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);
// const arr1 = [...arr, 10];
// console.log(arr1);
//array,string,map,set均可迭代，但object不可迭代
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
//用在函数传参时
// const calcNumber = function(a, b, c) {
//     return a + b + c;
// };
// const arr = [1, 2, 3];
// console.log(calcNumber(1, 2, 3));
// console.log(calcNumber(...arr));

//18 剩余模式，剩余的元素会被收集在一起
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const obj = {
//     obj1: {
//       a: 1
//     },
//     obj2: {
//       b: 2
//     },
//     obj3: {
//       c: 3
//     }
//   };
//   const {obj3, ...others} = obj;
//   console.log(obj3, others);
//函数方面
// const add = function(...numbers) {
//     console.log(numbers);
// };
// add(1, 2);
// add(1, 2, 3, 4, 5, 6);

//19 短路
//OR 将返回第一个真值，若均为假值，则返回最后一个值
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//AND 将返回第一个假值，若均为真值，则返回最后一个值
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'jonas');

//20 无效的合并运算符 ?? 当第一个值为无效值时返回第二个值
//无效值：null,undefined 不包括0和''
// const obj = {
//     a: 1,
//     b: 0
//   };
//   const propertyB = obj.b ?? 3;
//   console.log(propertyB);

//21 逻辑赋值运算符
// ||= 左侧为虚值(0,'',null,undefined,NaN)时，赋值为右侧
// ??= 左侧为无效值(null,undefined 不包括0和'')时，赋值为右侧
// &&= 左侧为真值时，赋值为右侧

//22 for-of循环 注意：break和continue在for-of中仍适用
// const arr = [1, 2, 3, 4];
// for(const item of arr) console.log(item);
// for(const item of arr.entries()) console.log(item);

//23 enhanced object literals
// const obj2 = {
//     b: 2
// };
// const obj1 = {
//     a: 1,
//     obj2,// 直接写对象名
//     calc() {// 可省略function和:
//         return this.a + this.b;
//     },
//     [`day-${1 + 2}`]: 'wed'// 属性名可实际计算
// };
// console.log(obj1);

//24 可选链接运算符?.
// 可选链运算符（?.）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 运算符的功能类似于 . 链式运算符，不同之处在于，在引用为空 (nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。
// const adventurer = {
//     name: 'Alice',
//     cat: {
//       name: 'Dinah'
//     }
//   };
//   const dogName = adventurer.dog?.name;
//   console.log(dogName);
//   // expected output: undefined
//   console.log(adventurer.someNonExistentMethod?.());
//   // expected output: undefined
// const users = [{name: 'Joans'}];
// console.log(users[0]?.name ?? 'Users array empty');

// 25 遍历对象 
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
//   const propertyName = Object.keys(obj);
//   console.log(propertyName);
//   const values = Object.values(obj);
//   console.log(values);
//   const entries = Object.entries(obj);
//   console.log(entries);
//   for(const [key, value] of entries) {
//     console.log(`${key}: ${value}`);
//   }

//26 集合set 集合中的元素不会重复 集合可迭代
// const ordersSet = new Set(['a', 'b', 'a', 'c', 'b']);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);//集合大小
// console.log(ordersSet.has('a'));//检测集合中是否有指定的元素
// console.log(ordersSet.has('d'));
// ordersSet.add('d');//集合中添加元素，不会重复添加
// ordersSet.delete('a');//删除集合中指定的元素
// // ordersSet.clear();//清空集合
// console.log(ordersSet);
// for(const item of ordersSet) console.log(item);//遍历集合

//27 Map
// const rest = new Map();
// rest.set('name', 'Jonas');//添加键值对
// rest.set(1, 'abc').set(true, 'we are open');
// console.log(rest);
// console.log(rest.get('name'));//获取指定键的值
// console.log(rest.get(1));
// console.log(rest.size);//map大小
// console.log(rest.delete(1));//删除指定键值对
// console.log(rest.has('name'));//检测是否含有指定的键
// rest.clear();//清空map
// //创建map的另一种方法
// const newMap = new Map([
//     [1, 'a'],
//     [2, 'b'],
//     [3, 'c']
//   ]);
//   console.log(newMap);
//   //对象转Map
//   const obj = {
//     name: 'Jonas',
//     age: 18,
//     address: 'China'
//   };
//   const map1 = new Map(Object.entries(obj));
//   console.log(map1);
//   //map可以迭代
// for(const [key, value] of map1) console.log(`${key}: ${value}`);
// //map转数组
// console.log([...newMap]);
//map中也存在keys(),values()
// console.log([...map1.keys()]);
// console.log([...map1.values()]);

//28 String
// const userName = 'Joanas';
// console.log(userName[1], userName.length);
// console.log('hello'[2], 'hello'.length);
// console.log(userName.indexOf('a'));//获取指定字符第一次出现的下标位置
// console.log(userName.lastIndexOf('a'));//获取指定字符最后一次出现的下标位置
// console.log(userName.indexOf('nas'));//获取指定字符串第一次出现的下标位置
//slice()方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。参数一：beginIndex从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 strLength + beginIndex。参数二：endIndex可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice() 会一直提取到字符串末尾。如果该参数为负数，则被看作是 strLength + endIndex。slice() 提取的新字符串包括beginIndex但不包括 endIndex
// console.log(userName.slice(1, 4));
//toLowerCase(),toUpperCase()
// console.log(userName.toLowerCase(), userName.toUpperCase());
//trim() 方法从字符串的两端清除空格，返回一个新的字符串，而不修改原始字符串。空格是指所有的空白字符（空格、tab、不换行空格等）以及所有行终止符字符（如 LF、CR 等）
// console.log('  hello world!\n'.trim());
//replace(),replaceAll()
// const str = 'hello world, hello, JavaScript';
// console.log(str.replace('hello', 'hi'));
// console.log(str.replaceAll('hello', 'hi'));
//includes(),startWith(),endWith()
// console.log(str.includes('world'));
// console.log(str.startsWith('hello'));
// console.log(str.endsWith('script'));
//split(), join()
// const str = 'a b c d';
// console.log(str.split(' '));
// console.log(['a', 'b', 'c', 'd'].join('+'));
//padStart(),方法用另一个字符串填充当前字符串（如果需要的话，会重复多次），以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充.padEnd()
// const str = 'hello';
// console.log(str.padStart(10, '*'));
//repeat()
// console.log(str.repeat(3));

//29 函数默认参数值
// const function1 = function(a = 1, b = 2, c = 3) {
//     console.log(a, b, c);
// };
// function1(4, 5, 6);
// function1();

//30 函数接受回调函数
// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };
// const transformer = function(str, fn) {
//     console.log(`transformed string: ${fn(str)}`);
//     console.log(`transformed by: ${fn.name}`);//function.name 属性返回函数实例的名称
// };
// transformer('JavaScript is the best!', upperFirstWord);

//31 函数返回函数
// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     };
// };
// const greeterHey = greet('Hey');
// greeterHey('Jonas');

//32 call() apply()
//call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数,该方法的语法和作用与 apply() 方法类似，只有一个区别，就是 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组
// const person = {
//     name: 'Jonas',
//     sing(song) {
//         console.log(`${this.name} sings ${song}`);
//     }
// };
// const newPerson = {
//     name: 'Tom'
// }
// person.sing('hello');
// const sing = person.sing;
// sing.call(newPerson, 'world');
// sing.apply(newPerson, ['hi']);

//33 bind() 
//bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用
// const module = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
//   };
//   const unboundGetX = module.getX;
//   console.log(unboundGetX()); // The function gets invoked at the global scope
//   // expected output: undefined
//   const boundGetX = unboundGetX.bind(module);
//   console.log(boundGetX());
//   // expected output: 42

//34 IIFE 立即调用函数表达式
//IIFE（立即调用函数表达式）是一个在定义时就会立即执行的 JavaScript 函数,这是一个被称为 自执行匿名函数 的设计模式，主要包含两部分。第一部分是包围在 圆括号运算符 () 里的一个匿名函数，这个匿名函数拥有独立的词法作用域。这不仅避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域,第二部分再一次使用 () 创建了一个立即执行函数表达式，JavaScript 引擎到此将直接执行函数
// (function() {
//     console.log('this will never run again');
// })();

//35 数组
//slice()方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变
// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice());//复制原数组
//splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。与slice()不同的是，splice（）第二个参数是要提取或删除的元素个数
// console.log(arr.splice(2, 3));
// console.log(arr);
//reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组
//concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
// const arr1 = [1, 2, 3];
// const arr2 = ['a', 'b', 'c'];
// const newArr = arr1.concat(arr2);
// console.log(newArr);
//join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符
// console.log(arr2.join('-'));
//at() 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数
// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.at(0));
// console.log(arr.at(-1));

//36 Math.abs(x) 函数返回一个数字的绝对值

//37 forEach()
// forEach() 方法对数组的每个元素执行一次给定的函数。注意：break和continue在forEach（）中不起作用
// const arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach(function(value, index, array) {//第一个参数是当前元素，第二个参数是当前元素的索引，第三个参数是forEach（）方法操作的数组
//   console.log(`NO.${index} of ${array}, value: ${value}`);
// });
//forEach()也可用在map和set中，用在map中第二个参数表示键，用在set中：value、key均为Set 中正在处理的当前元素。因为 Set 中没有键，所以 value 会被共同传递给这两个参数

//38 map()
//map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
// const arr = [1, 2, 3];
// const arrNew = arr.map(function(value) {//此处函数类似于forEach中的函数，可含三个参数
//   return value * 2;//map方法中记得加上return
// });
// console.log(arrNew);

//39 filter()
//filter() 方法创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素
// const arr = [1, 2, -1, 3, -4];
// const newArr = arr.filter(function(value) {//此处函数类似于forEach中的函数，可含三个参数
//   return value > 0;//注意filter中的函数返回的是一个布尔值，返回 true 表示该元素通过测试，保留该元素，false 则不保留
// });
// console.log(newArr);

//40 reduce()
//reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被作为初始值 initialValue，迭代器将从第二个元素开始执行（索引为 1 而不是 0）。
// const arr = [1, 2, 3, 4];
// const total = arr.reduce(function(acc, value) {
//   return acc + value;
// }, 0);
// console.log(total);

//41 find()
//find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
// const arr = [1, 2, -1, -2, 3];
// const result = arr.find(value => value < 0);
// console.log(result);

//42 findIndex()
//findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1,其回调函数参数和find()回调函数相同

//43 some()
//some() 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值。类似于includes（），但includes（）中是值的比较，some（）中是条件的判断
//const arr = [1, 2, 3, 4];
// console.log(arr.some(value => value % 2 === 0));

//44 every()
//every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值
// const arr = [1, 2, 3, 4];
// console.log(arr.every(value => value < 4));

//45 flat()
//flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回,参数depth指定要提取嵌套数组的结构深度，默认值为 1,使用 Infinity，可展开任意深度的嵌套数组.flat() 方法会移除数组中的空项
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());
// // expected output: Array [0, 1, 2, 3, 4]
// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(2));
// // expected output: Array [0, 1, 2, Array [3, 4]]

//46 flatMap()
//flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为 1 的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些
// const arr1 = [1, 2, [3], [4, 5], 6, []];
// const flattened = arr1.flatMap(num => num);
// console.log(flattened);
// expected output: Array [1, 2, 3, 4, 5, 6]

//47 sort()
//sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的
//string
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
//number
//升序（从小到大）
// const arr = [1, 2, -1, -2, 3];
// console.log(arr.sort((a, b) => a - b));
//降序（从大到小）
// console.log(arr.sort((a, b) => b - a));

//48 creating and filling arrays
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// const x = new Array(7);
// console.log(x);
//fill()
//fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引
// const array1 = [1, 2, 3, 4];
// Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// expected output: Array [1, 2, 0, 0]
// Fill with 5 from position 1
// console.log(array1.fill(5, 1));
// expected output: Array [1, 5, 5, 5]
// console.log(array1.fill(6));
// expected output: Array [6, 6, 6, 6]
//from()
//Array.from() 方法对一个伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）或可迭代对象（可以获取对象中的元素，如 Map 和 Set 等）创建一个新的，浅拷贝的数组实例
// const y = Array.from({length : 7}, (_, i) => i + 1);
// console.log(y);

//49 Number
// console.log('23');
// console.log(Number('23'));
// console.log(+'23');//Number可用+代替
//Number.parseInt(),Number.parseFloat()
//Number.parseInt() 方法依据指定基数，解析字符串并返回一个整数
//Number.parseFloat() 方法可以把一个字符串解析成浮点数
// console.log(Number.parseInt('30px', 10));//10表示十进制
// console.log(Number.parseFloat('2.5rem'));
//Number.isNaN() 方法确定传递的值是否为 NaN，并且检查其类型是否为 Number
// function typeOfNaN(x) {
// if (Number.isNaN(x)) {
//     return 'Number NaN';
// }
// if (isNaN(x)) {
//     return 'NaN';
// }
// }
// console.log(typeOfNaN('100F'));
// // expected output: "NaN"
// console.log(typeOfNaN(NaN));
// // expected output: "Number NaN"
//Number.isFinite()
// Number.isFinite() 方法用来检测传入的参数是否是一个有穷数,用此方法来检测是否是数字较好
//console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(20 / 0));
//Number.isInteger() 方法用来判断给定的参数是否为整数
// console.log(Number.isInteger(20));
// console.log(Number.isInteger(20.0));
// console.log(Number.isInteger(1.2));

//50 Math and Rounding
//Math.sqrt() 返回一个数的平方根
// console.log(Math.sqrt(25));
//开三次方可以用幂运算
//console.log(8 ** (1 / 3));
//Math.max() 函数返回作为输入参数的最大数字
// console.log(Math.max(1, 3, 2, 5, 4));
// console.log(Math.max(1, 3, 2, '5', 4));
//Math.min() 函数返回作为输入参数的数字中最小的一个
// console.log(Math.min(1, 3, 2, 5, 4));
//Math.PI 表示一个圆的周长与直径的比例，约为 3.14159
//Math.round() 函数返回一个数字四舍五入后最接近的整数.如果参数的小数部分大于 0.5，则舍入到相邻的绝对值更大的整数。如果参数的小数部分小于 0.5，则舍入到相邻的绝对值更小的整数。如果参数的小数部分恰好等于 0.5，则舍入到相邻的在正无穷（+∞）方向上的整数
// x = Math.round(20.49);   //20
// x = Math.round(20.5);    //21
// x = Math.round(-20.5);   //-20
// x = Math.round(-20.51);  //-21
// Math.ceil() 函数总是四舍五入并返回大于等于给定数字的最小整数
//Math.floor() 函数总是返回小于等于一个给定数字的最大整数
//toFixed() 方法使用定点表示法来格式化一个数值
// console.log((2.7).toFixed(0));
// console.log((2.345).toFixed(2));

//51 数字分隔符(便于阅读理解，并不改变数值)
// console.log(287_460_000_000);

//52 bigInt
//javascript能安全表示的最大整数
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
//BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。这原本是 Javascript 中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。可以用在一个整数字面量后面加 n 的方式定义一个 BigInt ，如：10n，或者调用函数 BigInt()（但不包含 new 运算符）并传递一个整数值或字符串值。不能用于 Math 对象中的方法；不能和任何 Number 实例混合运算，两者必须转换成同一种类型
// console.log(12312312375867979808908n);
// console.log(BigInt(123));
// console.log(20n === 20);
// console.log(20n == 20);

//53 时间和日期Date
// const now = new Date();//获取当前时间
// console.log(now.getFullYear());//年
// console.log(now.getMonth());//月，注意月份从0开始计算
// console.log(now.getDate());//日
// console.log(now.getDay());//星期
// console.log(now.getHours());//时
// console.log(now.getMinutes());//分
// console.log(now.getSeconds());//秒
//getTime 方法的返回值一个数值，表示从 1970 年 1 月 1 日 0 时 0 分 0 秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数。
// console.log(now.getTime());
//Date.now() 方法返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数
// console.log(Date.now());

//54 internationalizing Dates
//Intl.DateTimeFormat 对象能使日期和时间在特定的语言环境下格式化.可以使用 options 参数来自定义日期时间格式化方法返回的字符串,为了获得用于你的应用程序的用户界面的语言格式，请确保使用 locales 参数指定了语言
//const now = new Date();
// const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//     weekday: 'long'
//   };
//   const locales = navigator.language;//获取浏览器语言环境
//   console.log(new Intl.DateTimeFormat(locales, options).format(now));

//55 internationalizing numbers
//Intl.NumberFormat 对象能使数字在特定的语言环境下格式化.为了得到用户应用接口使用的语言格式，请确保使用 locales 参数指定该语言,可以使用 options参数自定义结果
// const num = 3884764.23;
// const locales = navigator.language;
//货币格式
// const options = {
//   style: 'currency',
//   currency: 'EUR'
// };
// console.log(new Intl.NumberFormat(locales, options).format(num));

//56 setTimeout and setInterval
//全局的 setTimeout() 方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码
//setTimeout(function[, delay, arg1, arg2, ...]),其中arg1, ..., argN 为附加参数，一旦定时器到期，它们会作为参数传递给function
// const arr = ['Tom', 'Jerry'];
// const timer = setTimeout((a, b) => console.log(`hello, ${a} and ${b}`), 3000, ...arr);
// if(arr.includes('Tom')) clearTimeout(timer);
//setInterval() 方法重复调用一个函数或执行一个代码片段，在每次调用之间具有固定的时间间隔,其参数类似于setTimeout()中的参数
// const printer = setInterval(() => console.log('hello, JavaScript'), 3000);

//57 构造函数首字母大写,箭头函数不能用作构造函数，因为箭头函数没有指向自己的this。调用构造函数用new关键字
// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };
// const jonas = new Person('Jonas', 1991);//此处new关键字作用：1.创建一个空对象2.构造函数执行后，this指向该对象3.该对象连接到原型4.构造函数自动返回该对象
// console.log(jonas);

//58 instanceof
//instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
// console.log(jonas instanceof Person);


//59 JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。JSON是一种文本格式字符串.
//JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串

//60 传统发起AJAX请求的步骤
//创建request对象
// const request = new XMLHttpRequest();
//打开请求，指明请求类型和请求的URL
// request.open('GET', 'https://restcountries.com/v2/name');
//发送请求
// request.send();
//监听request的load事件，触发后执行回调函数
// request.addEventListener('load', function() {});

//61 fetch
//fetch() 强制接受一个参数，即要获取的资源的路径。它返回一个 Promise,在promise中可以使用then方法，then方法传入回调函数，回调函数传入response参数，可调用response上的json（）方法，该方法也会返回一个promise，在此promise上使用then（）方法，传入回调函数，可得到数据
//fetch('https://restcountries.com/v2/name/portugal').then(response => response.json()).then(data => console.log(data));

//62 rejected Promise 当用户没有连接到网络发起请求时，fetch会返回一个rejected promise。promise处于rejected时，有两种处理方法。
//方法一：在then中传入第二个回调函数作为处理失败的回调函数
//fetch(`https://restcountries.com/v2/name/${country}`).then(response => response.json(), err => alert(err));
//方法二：在promise链的最后(finally前)加上catch，捕获错误
//fetch('https://restcountries.com/v2/name/portugal').then(response => response.json()).then(data => console.log(data)).catch(err => alert(err));

//63 finally
//finally() 方法返回一个 Promise。在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。这为在 Promise 是否成功完成后都需要执行的代码提供了一种方式。这避免了同样的语句需要在 then() 和 catch() 中各写一次的情况
//fetch('https://restcountries.com/v2/name/portugal').then(response => response.json()).then(data => console.log(data)).catch(err => alert(err)).finally(() => {});

//64 throw new Error
//throw 语句用来抛出一个用户自定义的异常。当前函数的执行将被停止（throw 之后的语句将不会执行），并且控制将被传递到调用堆栈中的第一个 catch 块。如果调用者函数中没有 catch 块，程序将会终止。
// fetch('https://restcountries.com/v2/name/portugal').then(response => {
//     if(!response.ok) {
//         throw new Error(`Country not found`);
//     }
//     return response.json();
// }).then(data => console.log(data)).catch(err => alert(err.message));

//65 building a simple promise
//通过 new 关键字和 Promise 构造器创建它的对象。这个构造器接受一个名为 "executor function" 的函数。这个函数应当接受两个函数参数。当异步任务成功时，第一个函数（resolve）将被调用，并返回一个值代表成功。当其失败时，第二个函数（reject）将被调用，并返回失败原因（失败原因通常是一个 error 对象）
// const lotteryPromise = new Promise((resolve, reject) => {
//     if(Math.random() >= 0.5) {
//         resolve('You win money');
//     } else {
//         reject('You lost money');
//     }
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//66 Promise.resolve(value) 方法返回一个以给定值解析后的 Promise 对象.Promise.reject() 方法返回一个带有拒绝原因的 Promise 对象
// Promise.resolve('abc').then(res => console.log(res));
// Promise.reject(new Error('Problem')).catch(err => console.error(err.message));

//67 async 函数是使用async关键字声明的函数,async 和 await 关键字让我们可以用一种更简洁的方式写出基于 Promise 的异步行为，而无需刻意地链式调用 promise. async函数返回的是一个promise
// const whereAmI = async country => {
//     const res = await fetch(`https://restcountries.com/v2/name/${country}`);
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
//     renderCountryData(data[1]);
// };
// whereAmI('China');
// console.log('first');

//68 try...catch处理错误
// try {
//     let a = 1;
//     const b = 2;
//     b = 3;
// } catch(err) {
//     alert(err.message);
// }

//69 Promise.all() 方法接收一个 promise 的 iterable 类型（注：Array，Map，Set 都属于 ES6 的 iterable 类型）的输入，并且只返回一个Promise实例,此方法在集合多个 promise 的返回结果时很有用。Promise.all 等待所有都完成（或第一个(最先)失败）

//70 Promise.race() 返回一个 Promise，它将与第一个传递(最快)的 promise 相同的完成方式被完成。它可以是完成（resolves），也可以是失败（rejects），这要取决于第一个完成（最快）的方式是两个中的哪个.

//71 Promise.allSettled() 方法是 promise 并发性方法的其中之一。在你有多个不依赖于彼此成功完成的异步任务时，或者你总是想知道每个 promise 的结果时，使用 Promise.allSettled()

//72 Promise.any()该方法用于获取首个兑现的 promise 的值。只要有一个 promise 兑现了，那么此方法就会提前结束，而不会继续等待其他的 promise 全部敲定

//73 将模块引入HTML中
//<script type="module">
//module是.js文件，文件名采用驼峰命名法。所有module默认是在严格模式下。
//使用import '路径' 导入，写在文件最上面
//module中的变量是私有的，可以使用export导出给其他模块使用,可以使用as给导出来的变量重命名
//可以使用import * as 对象名 from '路径名' 将模块中的所有作为一个对象导出来
//默认导出 export default 函数（没有名字），import 命名 from '路径'
//import 不是export的副本，他们指向内存中的同一地址，故在import后，可以修改export

//74 顶级await，以下代码均在模块中
// const getLastPost = async () => {
//     const res =await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     return {
//         title: data.at(-1).title,
//         text: data.at(-1).body
//     };
// };
// const lastPost1 = getLastPost();
// console.log(lastPost1);
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

//75 npm
//使用命令npm -init初始化，创建package.json，该文件存储项目的配置
//在上传或移动项目时，node_modules文件不必上传或移动，可以使用命令npm i来下载package.json中的所有包
//使用命令npm i 包名 --save-dev来安装开发阶段需要的包
//使用npm i 包名 -g来安装全局的包

//76 parcel用于捆绑包，安装后可使用以下两种方法来捆绑包
//方法一：使用命令npx parcel index.html可以将index.html中的module捆绑在一起，会产生一个dist文件夹
//方法二：在package.json中的"scripts"中添加"start": "parcel index.html",然后在终端输入命令npm run start
//热模块更换 不必重新加载页面，而是改变发生变化的局部
// if(module.hot) {
//     module.hot.accept();
// }
//可以在package.json中的"scripts"中添加"build": "parcel build index.html"，然后在终端输入命令npm run build来压缩代码

//77 Object.freeze()
//Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。

//78 OOP中创造对象、将对象连接到原型的三种方法
//(1)构造函数 constructor functions
//构造函数和普通函数一样，但构造函数习惯首字母大写且不能用箭头函数(箭头函数没有自己的this)，唯一的区别是构造函数用关键字new来调用
//new关键字的作用：1)创建一个空对象{} 2)调用构造函数并将this指向那个空对象 3)将空对象{}连接到原型 4)构造函数自动返回那个空对象{}
//可以用instanceof来判断对象是否是由某个构造函数实例化出来的
// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// const jack = 'jack';
// console.log(jonas instanceof Person);
// console.log(jack instanceof Person);
//尽量不要在构造函数中添加方法(若用该构造函数实例化的对象过多，会产生过多的内存开销)，若要添加应在原型上添加，如下所示
//javascript中每个函数都有原型，包括构造函数
// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear);
// }
// console.log(Person.prototype);
// jonas.calcAge();
//__proto__查看对象的原型，本质是构造函数的原型
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
//构造函数的原型是实例化对象的原型
// console.log(Person.prototype.isPrototypeOf(jonas));
//hasOwnProperty()用来判断某个对象是否含有指定的自身属性(非继承属性)
// Person.prototype.species = 'human';
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
//实例化对象的原型为构造函数的原型，而构造函数的原型的原型为构造函数Object()的原型，构造函数Object()的原型的原型指向null
//(2)ES6 classes
//es6 中的class依然是实现原型继承的
//class expression
// const PersonCl = class{}
//class declaration
// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }
// };
//es6 中的class是构造函数的语法糖，在class中并且构造函数外添加的方法是添加到原型上，class中的方法之间没有逗号隔开，class没有被提升，class是在严格模式下执行的
//(3)Object.create()
//Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型
// const PersonProto = {
//     calcAge: function() {
//         console.log(2037 - this.birthYear);
//     }
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.birthYear = 2002;
// console.log(steven);
// steven.calcAge();
// console.log(steven.__proto__, steven.__proto__ === PersonProto);

//79 getter setter 常用于数据验证 在类和对象中均可使用
// get 语法将对象属性绑定到查询该属性时将被调用的函数
//set 语法将对象属性绑定到要调用的函数,set必须指定一个参数
// const account = {
//     owner: 'Jonas',
//     movements: [200, 530, 120, 300],
//     get latest() {
//         return this.movements.slice(-1).pop();
//     },
//     set latest(mov) {
//         this.movements.push(mov);
//     }
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

//80 静态方法 静态属性和静态方法都只能在类或构造函数上使用，不能在实例中使用，静态方法只能访问静态属性和静态方法
//在构造函数中添加静态方法,并不会添加到原型上，所以不会被继承,实例不能使用该方法
// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };
// Person.hey = function() {
//     console.log('hey');
//     console.log(this);
// }
// Person.hey();
//在类上添加的静态方法，需要关键字static，实例也不能使用
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }
//     set fullName(name) {
//         this._fullName = name;
//     }
//     get fullName() {
//         return this._fullName;
//     }
//     static hey() {
//         console.log('hey');
//         console.log(this);
//     }
// };
// PersonCl.hey();

//81 构造函数实现的原型继承
// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear);
// };
// const Student = function(firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);//将Student.prototype的原型指向Person.prototype
// Student.prototype.introduce = function() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);

//82 es6 class中实现原型继承用关键字extends
//super可以调用父类的构造函数,在派生类的构造函数体中（使用 extends）它必须在使用 this 关键字之前和构造函数返回之前被调用。
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }
// };
// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear);
//         this.course = course;
//     }
//     hey() {
//         console.log(`${this.fullName} is in ${this.course}`);
//     }
// };
// const jonas = new StudentCl('jonas', 2000, 'computer science');
// jonas.calcAge();
// jonas.hey();

//83 Object.create() 实现原型继承
// const PersonProto = {
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }
// };
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// };
// StudentProto.introduce = function() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

//84 public private private在前面加上#
//public fields 和private fields都是在instance实例上，不在原型上
// class Person {
//     //public fields
//     fullName = 'jonas';
//     birthYear = 2000;
//     //private fields
//     #salary = 2000;

//     //public methods
//     getSalary() {
//         return this.#salary;
//     }
//     //private methods
//     #getAge() {
//         return 2037 - this.birthYear;
//     }
// };
// const jonas = new Person();
// console.log(jonas.fullName);
// // console.log(jonas.#salary);
// console.log(jonas.getSalary());
// console.log(jonas);
// console.log(jonas.__proto__);
// // jonas.#getAge()