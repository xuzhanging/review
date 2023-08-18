// 1.可以使用Create React App、Vite来初始化一个react项目，前者适合小案例（教学），后者适合用于实际项目开发，
// 使用Create React App初始化react项目时，先移动到想要创建项目的文件夹，然后在此终端输入npx create-react-app@5 项目名称，来创建项目。
// 项目初始化后，在终端运行npm run start，启动项目，然后删除src文件夹下的所有文件，在src下新建index.js。
// 在index.js中导入react
import React from "react";
import ReactDOM from "react-dom/client";
// 创建App组件，在react中使用函数来编写组件，首字母大写，需要return JSX（JSX是javascript拓展，在HTML中嵌入css，javascript和react组件，通过react内置的BABEL转换为javascript）。
// 一个组件只能返回一个元素，如果想要返回多个元素，可以将多个元素放在一个元素内，例如<div><h1>hello</h1><p>world</p></div>
function App() {
  return <h1>Hello React!</h1>;
}
// 创建root，React.StrictMode（严格模式）是react的一个组件，在开发过程中可以render组件两次，以便发现bug，还可以检查一些react api是否过时。
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// 前面提到过，在JSX中可以编写CSS，使用内联方式编写CSS是通过javascript对象的方式，注意CSS属性用驼峰命名法，如下：
function App() {
  return <h1 style={{ color: "red", fontSize: "96px" }}>hello</h1>;
}
// 若是外联方式的css，首先需要导入该css文件
import "./index.css";
// 在JSX中写类名，用className，而不是class。
function App() {
  return <h1 className="container">hello</h1>;
}
// 组件之间的数据传递依靠props，若想要传递的数据不是字符串，如数字、数组、对象等，可以使用javascript模式，及加上{}，例如如下的price
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        photoName="pizzas/spinaci.jpg"
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={10}
      />
    </main>
  );
}
function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
    </div>
  );
}
// 组件的data包括props和state，props来源于父组件，只能由父组件改变，props只读，state是可以被组件的逻辑改变的。react组件间采用单向数据流，数据只能从父组件流向子组件。
// JSX中不能嵌套语句（例如if/else、for、switch），但可以在javascript模式中使用javascript表达式，即在{}中使用javascript表达式。
// JSX中的注释需要放在{}中。
// rendering lists时，可以在数组上使用map方法，需要为每一个list添加一个唯一的key属性。
// 在JSX中有条件的render，可以使用 &&，如下
return (
  <footer className="footer">
    {isOpen > 0 && (
      <div className="order">
        <p>We're open until {closeHour}:00. Come visit us or order online.</p>
        <button className="btn">Order</button>
      </div>
    )}
  </footer>
);
// 还可以使用三元运算符，如下
{
  isOpen > 0 ? (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  ) : null;
}
// react fragment <></>(<React.Fragment></React.Fragment>) JSX只能返回一个根元素，若要返回多个元素，可以用div之类的标签包裹，也可以使用react fragment，即<></>，例如
return (
  <>
    <p>We're open until {closeHour}:00. Come visit us or order online.</p>
    <button className="btn">Order</button>
  </>
);
// react中事件是直接在html元素上处理，内联方式，例如
<button
  style={{ backgroundColor: "#7950f2", color: "#fff" }}
  onClick={() => alert("Previous")}
></button>;
// 在react中使用state，首先需要导入
import { useState } from "react";
// 然后使用useState()来创建state和设置state的函数，useState接受的参数为state的初始值，返回的是一个数组，有两项，第一项是state，第二项是设置state的函数，例如
const [step, setStep] = useState(1);
// 在react中不是手动地更新state，而是使用setState()，例如使用setStep()函数来更新step，让step加一
setStep(step + 1);
// 如果根据当前的state来更新state，建议使用回调函数来实现
setStep((s) => s + 1);
// 在react中，若state为数组，在使用setState追加项时，应该使用扩展，不能使用push()，例如
// const [items, setItems] = useState([]);
// function handleAddItem(item) {
//   setItems((items) => [...items, item]);
// }
// 若state为数组，使用setState删除项时，应该使用filter()，例如
// const [items, setItems] = useState([]);
// function handleDeleteItem(id) {
//   setItems((items) => items.filter((item) => item.id !== id));
// }
// 若state为数组，每一项为对象，使用setState更新项的属性时，应该使用map()和拓展，例如
// const [items, setItems] = useState([]);
function handleToggleItem(id) {
  setItems((items) =>
    items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    )
  );
}
// 若state为数组，欲实现按照不同的排序标准（对象的某个属性）进行list排序，应使用一个全新的变量，先将state赋值给该变量，然后根据排序的不同标准使用slice()赋值一份state，然后对复制的state使用sort()排序，再将排序后的结果赋值给那个变量，最后对那个变量使用map() 进行rendering，例如
let sortedItems = items;
if (sortBy === "input") sortedItems = items;
if (sortBy === "description")
  sortedItems = items
    .slice()
    .sort((a, b) => a.description.localeCompare(b.description));
if (sortBy === "packed")
  sortedItems = items
    .slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));
return (
  <ul>
    {sortedItems.map((i) => (
      <Item
        item={i}
        key={i.id}
        onDeleteItem={onDeleteItem}
        onToggleItem={onToggleItem}
      />
    ))}
  </ul>
);
// children prop，在组件间可以写入JSX，通过children访问，例如
<Button>
  <span>👉</span>Next
</Button>;
function Button({ children }) {
  return <button>{children}</button>;
}
// PropTypes 在安装create-react-app后，即可导入propTypes进行组件props的类型验证
import PropTypes, { func } from "prop-types";
// 验证传入Friend组件的参数类型
Friend.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sayHi: PropTypes.func,
};
function Friend({ name, age, sayHi }) {}
// useEffect http请求写在useEffect中，计时器通常写在useEffect中
import { useEffect } from "react";
useEffect(function () {
  fetch(`http://www.omdbapi.com/?s=interstellar&apikey=${KEY}`)
    .then((res) => res.json())
    .then((data) => setMovies(data.Search));
}, []); //useEffect第二个参数为数组，空数组则表示在initial render时执行一次effect，其余时间不执行；若不为空数组，则数组的任意一项（prop 或者 state）改变时，执行一次effect。
// 使用async await也可以写为
useEffect(function () {
  async function fetchMovies() {
    const res = await fetch(
      `http://www.omdbapi.com/?s=interstellar&apikey=${KEY}`
    );
    const data = await res.json();
    setMovies(data.Search);
  }
  fetchMovies();
}, []);
// 在异步代码中使用try catch来捕获错误
useEffect(function () {
  setIsLoading(true);
  async function fetchMovies() {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?s=interstellar&apikey=${KEY}`
      );
      if (!res.ok) throw new Error("wrong");
      const data = await res.json();
      // console.log(data);
      if (data.Response === "False") throw new Error("no such movie");
      setMovies(data.Search);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
      setErrorMessage(err.message);
    }
  }
  fetchMovies();
}, []);
// cleanup function可以由useEffect返回，在component rerender和unmount时执行，例如，还原title
useEffect(
  function () {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return function () {
      document.title = "usePopcorn";
    };
  },
  [title]
);
//还可用于清除data fetching，例如连续依次发起多个请求时，后发起的请求应该停止前面的无效请求，可以在cleanup中使用bom相关的操作，如下：
useEffect(
  function () {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        if (data.Response === "False") throw new Error("no such movie");
        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        if (err.name !== "AbortError") setErrorMessage(err.message);
      }
    }
    fetchMovies();
    return function () {
      controller.abort(); //清除前面的请求
    };
  },
  [query]
);
// react hooks 使用规则：只能在react函数中调用(组件中)，在top level中使用，不能在return之后使用、不能在条件语句、循坏中使用。
// useState()不仅可以传入值，当初始化的值依赖于计算时（例如，从本地读取）还可以传入一个回调函数（该回调函数不需要参数），该回调函数的返回值作为useState设置的初始值，例如
const [watched, setWatched] = useState(function () {
  const stored = JSON.parse(localStorage.getItem("watched"));
  return stored;
});
// useRef 用于存储不render到页面上的data，通常用于选择和存储dom元素。通过.current来读写存储的data。在dom元素中指定ref属性来和useRef联系起来。例如
function Search({ query, setQuery }) {
  const inputEle = useRef(null);
  console.log(inputEle.current); //input元素
  useEffect(function () {
    inputEle.current.focus();
  }, []);
  return <input type="text" placeholder="Search movies..." ref={inputEle} />;
}
// 不同于state的是， ref改变不会rerender。不同于普通变量的是，ref在多次render之间，不会reset，而普通变量在render时，会reset。
// 在effect中更新ref存储的值，例如
const ratingTimes = useRef(0);
useEffect(
  function () {
    if (userRating) ratingTimes.current++;
  },
  [userRating]
);
// 自定义hooks 当想要reuse一段包含一个或多个hooks的logic时，可以使用自定义hooks；reuse一段不包含hooks的logic时，使用普通函数；reuse UI时，使用component。自定义hooks和react内置hooks一样，命名以use开头，并且自定义hooks内部需要有一个或多个内置hooks，自定义hooks可以接受数据、返回数据（通常是数组、对象）。
// useReducer 和useState一样用来管理state，
// 导入 import {useReducer} from "react";
// 定义reducer函数(更新state的函数)，参数state为当前state，action为进行的操作，为一个对象，包含type操作类型，payload负载值
function reducer(state, action) {
  if (action.type === "dec") return state - 1;
  if (action.type === "inc") return state + 1;
  if (action.tyoe === "setCount") return action.payload;
}
// const [count, dispatch] = useReducer(reducer, 0)//dispatch为useReducer返回的函数，用于触发state updates，reducer函数可以访问当前state和传给dispatch的action,0为state初始值
dispatch({ type: "dec" });
dispatch({ type: "inc", payLoad: Number(e.target.value) });

// 使用vite初始化项目
// 先npm create vite@4 会提示安装vite 然后输入项目名称例如worldwise 然后选择框架react 再选择JavaScript 然后cd进入项目文件夹 然后npm i安装依赖包 最后npm run dev启动项目
// React Router为react第三方库，路由，安装npm i react-router-dom@6
// SINGLE-PAGE APPLICATION(SPA) 不会reload页面，而是根据不同的URL render不同的组件
// 在App中
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="product" element={<Product />} />
//         <Route path="pricing" element={<Pricing />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;
// 在Homepage中
// import { Link } from "react-router-dom";
// function Homepage() {
//   reutrn(<Link to="/pricing">Pricing</Link>);
// }
// export default Homepage;
// 单独构建一个PageNav组件，在每个页面使用，NavLink与Link不同的是，NavLink会在当前页面所在的NavLink中添加active类，可以在这个类中添加css区分其他NavLink。
import { NavLink } from "react-router-dom";
function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default PageNav;

// CSS Modules 每个组件一个CSS文件
// CSS Module开箱即用，安装好create react app或vite后，即可使用，在components文件夹中为每一个组件创建css文件，命名例如PageNav.module.css。在css module中尽量不要单独使用元素选择器。在相应的component中导入css，例如
import styles from "./PageNav.module.css";
// 然后使用className给元素添加类，例如className={styles.nav}
// 在css module中使用global css，在引入该css的jsx中使用className="test"即可。
// :global(.test) {
//   background-color: red;
// }
// 上面提到的NavLink中添加的active类，可以使用全局css添加样式，例如
// .nav :global(.active) {
//   background-color: green;
// }

// 路由嵌套
{
  /* <BrowserRouter>
  <Routes>
    <Route index element={<Homepage />} />//默认路由
    <Route path="product" element={<Product />} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="app" element={<AppLayout />}>
      <Route index element={<p>List of cities</p>} />//默认路由
      <Route path="cities" element={<p>List of cities</p>} />//嵌套路由中的element在<Outlet />中显示
      <Route path="countries" element={<p>Countries</p>} />
      <Route path="form" element={<p>Form</p>} />
    </Route>
    <Route path="login" element={<Login />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
</BrowserRouter>; */
}

// 在URL中存储state(参数和查询字符串)，例如，在App.jsx中
{
  /* <Route path="cities/:id" element={<City />} />; //id为参数名称 */
}
// 在CityItem.jsx中
// const { cityName, emoji, date, id, position } = city;
// <Link className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>//id为参数，lat和lng为查询字符串
//   <span className={styles.emoji}>{emoji}</span>
//   <h3 className={styles.name}>{cityName}</h3>
//   <time className={styles.date}>({formatDate(date)})</time>
//   <button className={styles.deleteBtn}>&times;</button>
// </Link>;
// 在City.jsx中
// import { useParams, useSearchParams } from "react-router-dom";
// const { id } = useParams(); //使用useParams()获取URL中的参数
// const [searchParams, setSearchParams] = useSearchParams();//使用useSearchParams()获取URL中的查询字符串
// const lat = searchParams.get("lat");//获取lat
// const lng = searchParams.get("lng");//获取lng
// setSearchParams({lat: 23, lng: 50});//设置查询字符串

// useNavigate
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
// <div className={styles.mapContainer} onClick={() => navigate("form")}>//navigate到form
//   <h1>Map</h1>
//   <h1>
//     Position: {lat}, {lng}
//   </h1>
// </div>;
// <Button
//   type="back"
//   onClick={(e) => {
//     e.preventDefault();
//     navigate(-1);//后退一步
//   }}
// >
//   &larr; Back
// </Button>;

// Navigate component 解决默认路由路径添加问题
{
  /* <Route index element={<CityList cities={cities} isLoading={isLoading} />} />; //默认路由，路径问题
import { Navigate } from "react-router-dom"; //使用Navigate解决路径问题
<Route index element={<Navigate replace to="cities" />} />; */
}

// createContext
import { createContext } from "react";
const PostContext = createContext(); //1）创建一个context
//2) 给子组件提供value
<PostContext.Provider
  value={{
    posts: searchedPosts,
    onClearPosts: handleClearPosts,
    onAddPost: handleAddPost,
    searchQuery,
    setSearchQuery,
  }}
>
  这里为子组件
</PostContext.Provider>;
//3）在子组件中consuming context value
import { useContext } from "react";
const { posts } = useContext(PostContext);

// react-datepicker 一个react时间选择器，可在npm官网上查看使用详情。

// react component实例在三种情况下发生rerender:
// 1)state change(props change 不会导致 rerender)
// 2)context change
// 3)parent component rerender

// 在子组件作为children传入parent component情况下，parent component rerender不会导致作为children传过来的子组件rerender。因为子组件在parent组件rerender之前就render了。

// memoization
// memoize components with memo function
// memoize objects with useMemo
// memoize functions with useCallback
// 可以做到prevent wasted renders, improve app speed and responsiveness

// memo function 会创建memoized component，当传给子组件的props不变时， 父组件rerender不会导致memoized component rerender
// 注意:memoized component在state change 或context change时，仍会rerender。
// 使用memo function memoize component步骤：
// 1）import {memo} from "react";
// 2）将需要memoize的component放入memo function，返回一个new component
// 例如：const Archive = memo(function Archive() {})

// 在react中，每次render，everything is re-create（包括object,function）
// 在JavaScript中，看起来相同的object或function实际上是不同的，{} !== {}
// 因此，当object或fucntion被作为props传递时，在每次re-render中，子组件都会接受新的props
// props不同，memo will not work
// 于是需要memoize object 和 function，使它们在re-render时保持不变。使用useMemo和useCallback
// useMemo使用步骤：
// 1)import {useMemo} from "react";
// 2)memoize object，例如：
const archiveObject = useMemo(() => {
  return {
    title: "POST ARCHIVE",
    value: false,
  };
}, []);
// useCallback使用步骤：
// 1）import {useCallback} from "react";
// 2)memoize function，与useMemo不同的是，不需要回调函数，例如：
const handleAddPost = useCallback(function handleAddPost(post) {
  setPosts((posts) => [post, ...posts]);
}, []);
// 注意：由useState返回的setter function已经是stable(memoize)，当将setter function作为prop传入子组件时，父组件re-render不会导致子组件re-render。(useReducer中的dispatch也是一样)

// Optimising bundle size
// Code splitting
// 将bundle(由webpack、vite等产生)分成多个小部分，随着时间下载（lazy loading） 一般按照routes下的页面分。
// 步骤：
// 1) import {lazy} from "react";
// 2）将导入的pages换成lazy，例如：
// 将
// import Homepage from "./pages/Homepage";
// import AppLayout from "./pages/AppLayout";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
// 换为
// const Homepage = lazy(() => import("./pages/Homepage"));
// const AppLayout = lazy(() => import("./pages/AppLayout"));
// const Product = lazy(() => import("./pages/Product"));
// const Pricing = lazy(() => import("./pages/Pricing"));
// const Login = lazy(() => import("./pages/Login"));
// const PageNotFound = lazy(() => import("./pages/PageNotFound"));
// 3) 在不同的page之间首次切换时添加SpinnerFullPage（该组件自己编写）例如：
// import { Suspense } from "react";
// <Suspense fallback={<SpinnerFullPage />}>
// <Routes>
//   <Route index element={<Homepage />} />
//   <Route path="product" element={<Product />} />
//   <Route path="pricing" element={<Pricing />} />
//   <Route
//     path="app"
//     element={
//       <ProtectedRoute>
//         <AppLayout />
//       </ProtectedRoute>
//     }
//   >
//     <Route index element={<Navigate replace to="cities" />} />
//     <Route path="cities" element={<CityList />} />
//     <Route path="cities/:id" element={<City />} />
//     <Route path="countries" element={<CountryList />} />
//     <Route path="form" element={<Form />} />
//   </Route>
//   <Route path="login" element={<Login />} />
//   <Route path="*" element={<PageNotFound />} />
// </Routes>
// </Suspense>

// REDUX
// npm i redux;
//import { createStore } from "redux";
// const store = createStore(reducer);
// function deposit(amount) {
//   return {
//     type: "account/deposit",
//     payload: amount,
//   };
// }
// store.dispatch(deposit(500));
// console.log(store.getState());
// combine more reducers
// import {combineReducers} from "redux";
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });
// const store = createStore(rootReducer);

// 讲redux与react application连接起来
// npm i react-redux
//在index.js中 import { Provider } from "react-redux";
/* <Provider store={store}>
  <App />
</Provider>; */
// 在子组件中使用
// import {useSelector} from "react-redux";
// const customer = useSelector(store => store.customer)

// 使用dispatch
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch();

// reducer中不能进行异步操作，如API 请求
// 可以使用第三方中间件thunk来处理异步代码，redux中的middleware处于dispatch和store之间。dispatch传过来的action，会先进入middleware，然后进入store。
// redux thunk使用步骤
// npm i redux-thunk
// 在store.js中
// import thunk from "redux-thunk";
// import {applyMiddleware} from "redux";
// const store = createStore(rootReducer, applyMiddleware(thunk));
// 在accountSlice.js中
// export function deposit(amount, currency) {
//   if (currency === "USD")
//     return {
//       type: "account/deposit",
//       payload: amount,
//     };
//   return async function (dispatch, getState) {
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const convertData = data.rates.USD;
//     dispatch({ type: "account/deposit", payload: convertData });
//   };
// }
