//DOM manipulation
//1 textContent属性表示一个节点及其后代的文本内容 document.querySelector('.box').textContent
//获取表单中的内容用value document.querySelector('input').value

//2 javascript改变元素style的属性时，需以字符串赋值
//document.querySelector('.box').style.width = '30px'

//3 Element.classList 是一个只读属性，返回一个元素 class 属性的动态 DOMTokenList 集合,可以使用 add()、remove()、replace() 和 toggle() 方法修改其关联的 DOMTokenList,contains()可用于判断是否含指定的类,toggle() 方法从列表中删除一个给定的标记并返回 false。如果标记不存在，则添加并且函数返回 true
//Element.classList.remove('hidden') 删除Element的hidden类 和Element.style.display = 'block'功能相似

//4 可以通过事件监听中的回调函数的参数e来查看事件的属性，比如e.key可以用来查看键盘按下了哪个键
//监听整个页面的键盘按下事件
// document.addEventListener('keydown', function(e) {
//     console.log(e.key);
// });

//5 获取/改变img的src属性，直接Element.src,不用加style

//6 insertAdjacentHTML() 方法将指定的文本解析为 Element 元素，并将结果节点插入到 DOM 树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接使用 innerHTML 操作更快
// 语法：element.insertAdjacentHTML(position, text)
// 参数一position
// 一个 DOMString，表示插入内容相对于元素的位置，并且必须是以下字符串之一：
// 'beforebegin'：元素自身的前面。
// 'afterbegin'：插入元素内部的第一个子节点之前。
// 'beforeend'：插入元素内部的最后一个子节点之后。
// 'afterend'：元素自身的后面。
// 参数二text
// 是要被解析为 HTML 或 XML 元素

//7 Element.innerHTML 属性设置或获取 HTML 语法表示的元素的后代

//8 阻止表单默认提交行为，可用e.preventDefault();

//9 让输入框失去焦点(闪烁的光标)可以使用blur()，获得焦点focus()

//10 querySelectorAll()得到的是一个伪数组，可以通过Array.from()方法转化为正真意义上的数组，扩展运算符（...）也可以

//11 选择元素
//获取整个html，可以使用document.documentElement
// console.log(document.documentElement);
// console.log(document.head);//获取html的head部分
// console.log(document.body);//获取html的body部分
//document.querySelector()返回匹配的第一个元素
//document.querySelectorAll()返回匹配到的所有元素，返回的是一个NodeList
//document.getElementById()返回匹配到的一个元素
//document.getElementsByTagName()返回一个包括所有给定标签名称的元素的 HTML 集合HTMLCollection。整个文件结构都会被搜索，包括根节点。返回的 HTML 集合是动态的，意味着它可以自动更新自己来保持和 DOM 树的同步而不用再次调用 document.getElementsByTagName()，注意与NodeList的不同
//document.getElementsByClassName()返回的也是集合HTMLCollection

//12 创建和插入元素
//insertAdjacentHTML前面已经介绍过
// document.createElement()用于创建一个由标签名称 tagName 指定的 HTML 元素。Element.prepend()方法可以在父节点的第一个子节点之前插入元素
// const message = document.createElement('div');
// document.querySelector('h1').prepend(message);
//Element.append()方法在 Element的最后一个子节点之后插入元素
//Node.cloneNode() 方法返回调用该方法的节点的一个副本,括号中如果为 true，则该节点的所有后代节点也都会被克隆，如果为 false，则只克隆该节点本身
//element.before()方法在element前插入元素，element.after()方法在element之后插入元素

//13 删除元素
//Element.remove() 方法，把Element从它所属的 DOM 树中删除
//Node.parentElement返回当前节点的父元素节点，如果该元素没有父节点，或者父节点不是一个 DOM 元素，则返回 null。Node.removeChild() 方法从Node中删除一个子节点。返回删除的节点
//node.removeChild(child)//child 是要移除的那个子节点。node 是child的父节点

//14 style
//javascript设置的style是作为内联样式的style，直接在dom中设置
//Element.style获取的是内联样式,不能获取添加的类中的属性值,但是可以修改添加类中的属性值
//Window.getComputedStyle()可以获取一个包含所有CSS属性值(即使没有设置，但以最终页面呈现的效果为准)的对象，CSS 属性值可以通过对象提供的 API 或通过简单地使用 CSS 属性名称进行索引来访问
//console.log(window.getComputedStyle(message).width);//注意得到的是字符串，如果想对结果进行计算，可以使用Number.parseInt或Number.parseFloat将结果转换为数字并去掉单位后，再计算，然后赋值
//message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//15 CSS自定义属性 setProperty()可以改变CSS自定义属性的值
// document.documentElement.style.setProperty('--color-primary', 'green');

//16 Attribute属性
// const logo = document.querySelector('.nav__logo');//获取img
//获取img的属性
// console.log(logo.alt);
// console.log(logo.src);//获取照片的绝对路径
//className 获取或设置指定元素的 class 属性的值
// console.log(logo.className);
//若想获取自定义(非标准)属性，可以使用getAttribute()
// console.log(logo.getAttribute('designer'));
// console.log(logo.getAttribute('src'));//获取照片的相对路径
//setAttribute() 设置指定元素上的某个属性值。如果属性已经存在，则更新该值；否则，使用指定的名称和值添加一个新的属性
//logo.setAttribute('company', 'Bankist');
//获取数据属性可以用dataset
// console.log(logo.dataset.versionNumber);
//Element.attributes可以获取元素的所有属性，使用Array.from()可将得到的属性集转换为数组

//17 类 改变元素类名时，尽量使用classList中的方法，不要使用className，因为className赋值时会覆盖元素上的所有类，并且只能添加一个类

//18 Element.getBoundingClientRect() 方法返回一个 DOMRect 对象，其提供了元素的大小及其相对于视口的位置.返回值是一个 DOMRect 对象，是包含整个元素的最小矩形（包括 padding 和 border-width）。该对象使用 left、top、right、bottom、x、y、width 和 height 这几个以像素为单位的只读属性描述整个矩形的位置和大小。除了 width 和 height 以外的属性是相对于视图窗口的左上角来计算的。
//Window.scrollX返回文档/页面水平方向滚动的像素值,pageXOffset 属性是 scrollX 属性的别名
//Window.scrollY返回文档在垂直方向已滚动的像素值,pageYOffset 属性是 scrollY 属性的别名
//获取当前视口宽和高，可以使用document.documentElement.clientWidth和document.documentElement.clientHeight
//Window.scrollTo()表示从页面最开始的位置（非当前视口）滚动到文档中的某个坐标位置
//window.scrollTo(x, y)//x为水平滚动距离， y为垂直滚动距离
//window.scrollTo(options)//options为一个包含三个属性的对象（top垂直滚动距离， left水平滚动距离，behavior滚动行为）
// window.scrollTo({
//   top: 0,
//   behavior: "smooth",
// });
//Element.scrollIntoView({behavior: "smooth"})可以更简单的实现将页面滚动到Element元素处，但有兼容性

//19 移除事件监听
// const alert1 = function() {
//     alert('alert!');
// };
//h1.removeEventListener('mouseenter', alert1);//移除鼠标经过h1触发alert1的事件监听

//20 可以在html中标签上绑定事件监听
// <h1 onclick="alert('hello')">hello</h1>

//21 事件捕获 事件冒泡
//事件处理函数中，this指向和e.currentTarget相同，e.target不一定相同
//e.stopPropagation()//阻止事件冒泡
//给元素添加的事件监听默认只会监听冒泡阶段，不会监听捕获阶段。想要监听捕获阶段，可以在处理函数后添加第三个参数，值为true
//事件委托，利用事件冒泡的原理，给要绑定事件的元素的父元素绑定事件监听，利用冒泡原理，点击子元素时，冒泡到父元素，触发事件，从而不必给每一个子元素都绑定事件监听，进而提高效率

//22 遍历DOM
//选择child
// Node.childNodes 返回包含指定节点的子节点的集合，该集合为即时更新的集合
// Element.children 是一个只读属性，返回 一个 Node 的子elements ，是一个动态更新的 HTMLCollection
//Element.firstElementChild 只读属性，返回对象的第一个子元素
//Element.lastElementChild 返回对象的最后一个子元素
//选择parent
//Node.parentNode返回指定的节点在 DOM 树中的父节点
//Node.parentElement返回当前节点的父元素节点
//Element.closest() 方法用来获取：匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身）
//选择sibling
//previousElementSibling 返回当前元素在其父元素的子元素节点中的前一个元素节点，如果该元素已经是第一个元素节点，则返回 null, 该属性是只读的
//nextElementSibling 返回当前元素在其父元素的子元素节点中的后一个元素节点，如果该元素已经是最后一个元素节点，则返回 null, 该属性是只读的
//Node.previousSibling返回当前节点的前一个兄弟节点，没有则返回null
//Node.nextSibling 是一个只读属性，返回其父节点的 childNodes 列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回 null

//23 mouseenter不冒泡，mouseover会冒泡

//24 给事件处理函数传参的两种方法
//1.将事件处理函数中的操作封装为一个函数，然后事件处理函数调用该函数，在封装的函数中实现传参
// const opacityChange = function(e, opa) {
//     if(e.target.classList.contains('nav__link')){
//       e.target.closest('.nav').querySelectorAll('.nav__link').forEach(item => {
//         if(item !== e.target){
//           item.style.opacity = opa;
//         }
//       });
//       e.target.closest('.nav').querySelector('.nav__logo').style.opacity = opa;
//     }
//   };
//   navLinks.addEventListener('mouseover', function(e) {
//     opacityChange(e, 0.5);
//   });
//2.bind() bind创建它调用的函数的副本，并且该副本不会立即执行
// const opacityChange = function(e) {
//     if(e.target.classList.contains('nav__link')){
//       e.target.closest('.nav').querySelectorAll('.nav__link').forEach(item => {
//         if(item !== e.target){
//           item.style.opacity = this;
//         }
//       });
//       e.target.closest('.nav').querySelector('.nav__logo').style.opacity = this;
//     }
//   };
//   navLinks.addEventListener('mouseover', opacityChange.bind(0.5));//将opacityChange的this指向为0.5

//25 滚动事件
//滚动页面，滚动事件监听是绑在window上
// window.addEventListener('scroll', function(e) {
//     console.log(e);
// });

//26 IntersectionObserver
// const obsCallback = function(entries, observer) {
//     entries.forEach(entry => {
//         console.log(entry);
//     })
// };
// const obsOptions = {
//     root: null, //根元素 与目标元素交互的元素，可以是具体某个元素，也可以是null（整个视口）
//     threshold: 0.1 //阈值(可以有多个)，交叉点的百分比,达到百分比时会调用回调函数
// }
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);//观察目标对象section1
//IntersectionObserver.unobserve()使 IntersectionObserver 停止监听特定目标元素

//27 生命周期DOM事件
//HTML解析完后，触发的事件(不必等待样式表，图片或者子框架完成加载)
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('HTML parsed and DOM tree built!');
// });
//页面加载完后。触发的事件(所有依赖资源如样式表和图片都已完成加载时触发)
// window.addEventListener('load', function() {
//     console.log('Page fully loaded');
// });
//当浏览器窗口关闭或者刷新时，会触发 beforeunload 事件。当前页面不会直接关闭，可以点击确定按钮关闭或刷新，也可以取消关闭或刷新.事件使网页能够触发一个确认对话框，询问用户是否真的要离开该页面。如果用户确认，浏览器将导航到新页面，否则导航将会取消,要显示确认对话框，事件处理程序需要在事件上调用preventDefault()
// window.addEventListener('beforeunload', function(e) {
//     e.preventDefault();
//     e.returnValue = '';
// });

//28 Script Loading
//通常情况下，script写在body结束前，此情况下，在HTML被完全解析后，拉取并执行script
//async script写在head，此情况下，在解析HTML的同时拉取script，拉取完后执行script，此时HTML需等待script执行完后才能继续解析余下部分
//defer script写在head，此情况下，在解析HTML的同时拉取script，拉取完毕后，继续解析余下的HTML，最后再执行script

//29 geolocation
// navigator.geolocation 只读属性返回一个 Geolocation 对象，通过这个对象可以访问到设备的位置信息
//navigator.geolocation.getCurrentPosition(success, error, options)用来获取设备当前位置。success为成功得到位置信息时的回调函数，error（可选）获取位置信息失败时的回调函数

//30 hashchange event
//当 URL 的片段标识符更改时，将触发hashchange事件 (跟在＃符号后面的 URL 部分，包括＃符号)
// window.addEventListener('hashchange', function() {
//     console.log('The hash has changed!')
//   }, false);
//获取当前url的hash值
// window.location.hash

//31 同一个对象上绑定处理函数相同的多个不同的事件监听时，可以将监听的事件放在一个数组中，forEach遍历即可
// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));

//32 navigator.language返回浏览器界面的语言

//33 监听表单提交事件
// form.addEventListener('submit', function() {});

//34 改变表单(<input>、<select>和<textarea>)的选项值时，触发change事件
// input.addEventListener('change', function() {});

//35 对于给页面一开始加载后还没有创建的元素绑定事件监听，可以用事件委托来实现

//36 HTMLElement 接口的只读属性 dataset 提供了对元素上自定义数据属性（data-*）读/写访问

//37 本地存储
// localStorage 中的键值对总是以字符串的形式存储
// 通过 Storage.setItem() 增加了一个数据项目,JSON.stringify()将对象转换为字符串
// localStorage.setItem('workouts', JSON.stringify(this.#workouts));
//读取 localStorage 项，JSON.parse()将字符串转换为对象
// const workout = JSON.parse(localStorage.getItem('workouts'));
//注意以上用JSON.stringify()和JSON.parse()会将对象的原型链丢失
//移除 localStorage 项
//localStorage.removeItem('workout');

//38 location.reload() 方法用来刷新当前页面，就像刷新按钮一样

//39 Document.createRange()返回一个range对象
//Range.createContextualFragment() 方法通过以 range 的开头（选定节点的父级）作为上下文节点来调用 HTML 片段解析算法，传入参数tagString包含要转换为文档片段的文本和标签的文本
//Node.isEqualNode() 方法可以判断两个节点是否相等
//Node 的 nodeValue 属性返回或设置当前文本节点的text值
//当修改页面某些数据时，如果希望页面只在那些修改了数据或与修改数据有关的地方更新，而不必重新刷新整个页面时，可以使用如下方法
// const newDOM = document.createRange().createContextualFragment(newMarkup);
// const newElements = Array.from(newDOM.querySelectorAll('*'));
// const curElements = Array.from(this.#parentElement.querySelectorAll('*'));
// newElements.forEach((newEl, i) => {
//     const curEl = curElements[i];
//     // console.log(curEl, newEl.isEqualNode(curEl));
//     if((!newEl.isEqualNode(curEl)) && (newEl.firstChild?.nodeValue.trim() !== '')) {
//         curEl.textContent = newEl.textContent;
//     }
//     if(!newEl.isEqualNode(curEl)) {
//         Array.from(newEl.attributes).forEach(attr => {
//         curEl.setAttribute(attr.name, attr.value)
//         })
//     }
// })

//40 FormData 可以将表单的所有数据转换为键值对列表
//const dataArr = [...new FormData(表单元素)]
//Object.fromEntries() 方法把键值对列表转换为一个对象,Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组
// const data = Object.fromEntries(dataArr);

//41 history
//Window.history 是一个只读属性，用来获取History 对象的引用，History 对象提供了操作浏览器会话历史（浏览器地址栏中访问的页面，以及当前页面中通过框架加载的页面）的接口
//history.pushState() 方法向当前浏览器会话的历史堆栈中添加一个状态，改变当前URL，接受三个参数，前两个不重要，可传入null和''，第三个参数是URL，URL 不必是绝对的。如果是相对的，则相对于当前 URL 进行解析,可以是hash值。
// window.history.pushState(null, '', `#${model.state.recipe.id}`);

//42 js代码说明文档 jsdoc.app

//43 window.confirm() 令浏览器显示一个带有可选的信息的对话框，并等待用户确认或取消该对话框,阻止用户访问程序界面的其他部分，直到对话框被关闭。返回值一个布尔值，表示是否选择了确定（true）或取消（false）
// function handleClearList() {
//   const confirmed = window.confirm(
//     "Are you sure you want to delete all items?"
//   );
//   if (confirmed) setItems([]);
// }

//44 crypto.randomUUID() //生成随机id，在旧浏览器中无法使用

//45 document.title 网页标题

//46 AbortController 接口表示一个控制器对象，允许你根据需要中止一个或多个 Web 请求
// let controller;
// abortBtn.addEventListener("click", () => {
//   if (controller) {
//     controller.abort(); //中止一个尚未完成的 Web（网络）请求
//     console.log("中止下载");
//   }
// });
// function fetchVideo() {
//   controller = new AbortController(); //创建一个新的 AbortController 对象实例
//   const signal = controller.signal; //返回一个 AbortSignal 对象实例，它可以用来 with/abort 一个 Web（网络）请求
//   fetch(url, { signal }) //将 signal 和 controller 与 fetch 请求相关联，并且允许我们通过调用 AbortController.abort() 去中止它
//     .then((response) => {
//       console.log("下载完成", response);
//     })
//     .catch((err) => {
//       console.error(`下载错误：${err.message}`);
//     });
// }
//当 abort() 被调用时，这个 fetch() promise 将 reject 一个名为 AbortError 的 DOMException，为了使页面内容正常显示获取的结果，在try catch中可以选择不展示该错误，if(err.name !== "AbortError"){}

//47 document.activeElement 选中当前页面focus的元素
