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
import PropTypes, { element, func } from "prop-types";
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
// 先npm create vite@4 会提示安装vite 然后输入项目名称例如worldwise 然后选择框架react 再选择JavaScript 然后cd进入项目文件夹 然后npm i安装依赖包 然后配置eslint，npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev 然后创建.eslintrc.json文件 在.eslintrc.json中{"extends": "react-app"} 然后在vite.config.js中import eslint from "vite-plugin-eslint"; export default defineConfig({plugins: [react(), eslint()],});最后npm run dev启动项目
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
// searchParams.set("discount", value); //设置discount查询参数，值为value
// setSearchParams(searchParams)//将设置好的查询参数放到URL中
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
// global store update. then all consuming components rerender（redux内部会做性能优化）.
// useReduder: event handler -> action(type and payload) -> dispatch -> reducer -> update state;
// redux:event handler -> action creator function(keep all actions one place) -> action -> dispatch -> store(all global state centralize container,contians more reducers，usually one reducer per app feature.) -> update state;
// redux 代码写在src下store.js中
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
// 将多个reducer放在rootReducer中
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });
// const store = createStore(rootReducer);

// 通常将多个reducer放在features下的多个文件夹中，命名如accountSlice.js(文件位置：src/features/accounts/accountSlice.js)、customerSlice.js(src/features/customers/customerSlice.js)

// 将redux与react application连接起来，使用react-redux
// npm i react-redux
//在index.jsx(main.jsx)中 import store from "./store.js",import { Provider } from "react-redux";
/* <Provider store={store}>
  <App />
</Provider>; */
// 在需要使用store的子组件中使用
// import {useSelector} from "react-redux";
// const customer = useSelector(store => store.customer)

// 在react中使用redux store 的 dispatch
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch({type: "", payload: ""});

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

// REDUX TOOLKIT //configureStore function 包含了thunk middleware 和DevTools。
// npm i @reduxjs/toolkit
// 在store.js中只需导入
// import { configureStore } from "@reduxjs/toolkit";
// const store = configureStore({
//   reducer: {
//     account: accountReducer,
//     customer: customerReducer,
//   },
// });
// export default store;
// 使用redux toolkit，accountSlice.js可以写为
// import { createSlice } from "@reduxjs/toolkit";
// const accountSlice = createSlice({
//   name: "account",
//   initialState,
//   reducers: {
//     deposit: function (state, action) {
//       state.balance += action.payload;
//     },
//     withdraw: function (state, action) {
//       state.balance -= action.payload;
//     },
//     requestLoan: {
//       //多个参数，先使用prepare function
//       prepare(loan, purpose) {
//         return {
//           payload: {
//             loan,
//             purpose,
//           },
//         };
//       },
//       reducer(state, action) {
//         if (state.loan > 0) return;
//         state.loan = action.payload.loan;
//         state.loanPurpose = action.payload.purpose;
//         state.balance += action.payload.loan;
//       },
//     },
//   },
// });
// export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
// export default accountSlice.reducer;
// 与react application 连接的步骤同redux

// 在redux toolkit 的 creator function中调用creator function，例如
// decreaseItemQuantity(state, action) {
//   const item = state.cart.find((item) => item.pizzaId === action.payload);
//   item.quantity--;
//   item.total = item.quantity * item.unitPrice;
//   if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);//creator function中调用creator function
// }

// redux devtools安装
// 1）安装google extension ：redux devtools
// 2）npm i redux-devtools-extension
// redux toolkit 会自动将devtool与application连接

// 项目文件结构
// src下features、ui(reusable components)、services(reusable code that interacting with api)、utils(reusable helper function)

// 使用react-router-dom 创建路由的新方法
// npm i react-router-dom@6
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/menu",
//         element: <Menu />,
//       },
//       {
//         path: "/cart",
//         element: <Card />,
//       },
//       {
//         path: "/order/new",
//         element: <CreateOrder />,
//       },
//       {
//         path: "/order/:orderId",
//         element: <Order />,
//       },
//     ],
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router}/>
// }

// 较新版的react-router-dom可以进行fetch data
// 在Menu.jsx中，创建loader function
// import { useLoaderData } from "react-router-dom";
// function Menu() {
//   const data = useLoaderData();
//   console.log(data);
//   return <h1>Menu</h1>;
// }
// export async function loader({params}) {//若需要url中的参数，可以使用params
//   const data = await getMenu();
//   return data;
// }
// {
//   path: "/menu",
//   loader: menuLoader,
//   element: <Menu />
// }

// 添加加载指示器，可以使用react-router-dom提供的useNavigation，useNavigation返回的对象中state属性表示数据是否加载完成，可以根据这个属性，展示自定义的Loader component

// 错误处理，在react-router-dom中可以使用useRouteError来处理错误，注意子路由中的error如果没有处理，会冒泡到父路由上。
//   {
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: ...
//   },
// ]);
// 在Error component中
// import { useRouteError } from "react-route-dom";
// const error = useRouteError();
// console.log(error.data);

// 使用react router actions 向服务端写数据、改数据 前面提到的loader是读数据，下面的action是写数据
// 使用react-router-dom提交数据，可以使用react-router-dom提供的Form
// import { Form, redirect } from "react-router-dom";
// {
//   path: "/order/new",
//   element: <CreateOrder />,
//   action: createOrderAction,
// }
// export async function action({ request }) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   const order = {
//     ...data,
//     cart: JSON.parse(data.cart),
//     priority: data.priority === "on",
//   };
//   const newOrder = await createOrder(order);
//   console.log(newOrder);
//   return redirect(`/order/${newOrder.id}`);//useNavigate用在compoment中，可以使用react-router-dom提供的redirect
// }

// tailwind css
// 在官网查看安装，选择vite，react根据步骤安装
// 安装Tailwind CSS IntelliSense 插件
// 安装prettier extension，npm install -D prettier prettier-plugin-tailwindcss
// 创建prettier.config.cjs，在该文件中编写
// module.exports = {
//   plugins: ["prettier-plugin-tailwindcss"],
// };

// defaultValue属性表示表单input默认值，若此表单不是controlled element，但使用的是global state中的值，可以使用defaultValue，此时再输入，input值会改变（若使用value，则不会改变）

// style component第三方库
// npm i styled-components
// 安装vscode-styled-components 插件
// import styled from "styled-components";
// const H1 = styled.h1` //组件，首字母大写，styled后面为html元素，该组件可以接受和html元素、jsx一样的属性和参数 注意：如果命名重复，可以在前面加上Styled，例如StyledHeader
//   font-size: 30px;
//   font-weight: 600;
// `;
// const StyledApp = styled.div`
//   background-color: orange;
// `;
// function App() {
//   return (
//     <StyledApp>
//       <H1>The wild oasis</H1>
//     </StyledApp>
//   );
// }
// export default App;

// 使用style component写global style
// 新建GlobalStyles.js
// import { createGlobalStyle } from "styled-components";
// const GlobalStyles = createGlobalStyle`button {cursor: pointer;}`;
// export default GlobalStyles;
// 在App.js中，将GlobalStyles组件包含在App中，
// import GlobalStyles from "./styles/GlobalStyles";
// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <div>
//         <H1>The wild oasis</H1>
//       </div>
//     </>
//   );
// }

// 在style component中写hover和在sass中一样
// const Button = styled.button`
//   &:hover {
//     background-color: #fff;
//   }
// `;

// style component css function、props
// 例如
// <Header as="h2"></Header> //Header 作为h2
// const Header = styled.h1`
//   ${(props) =>
//     prop.as === "h1" &&
//     css`
//       font-size: 2rem;
//     `}
//   ${(props) =>
//     prop.as === "h2" &&
//     css`
//       font-size: 3rem;
//     `}
//   ${(props) =>
//     prop.as === "h3" &&
//     css`
//       font-size: 4rem;
//     `}
// `;

// 使用style component 给第三方组件添加样式，例如给NavLink添加样式
// const StyledNavLink = styled(NavLink)`
//   background-color: #fff;
// `;

// 使用styled component 给组件指定属性，例如创建一个type为file的input
// const StyledInput = styled.input.attrs({ type: "file" })`...`;

// styled component本质上是component，可以在写样式时，通过props访问到传进来的prop，例如,访问传入StyledButton的active，若有该prop则改变背景颜色。
// const StyledButton = styled.button`
//   ${(props) =>
//     props.active &&
//     css`
//       background-color: yellow;
//     `}
// `;

// react component 可以设置默认prop
// Headers.defaultProps = {
//   type: "h2",
// };

// react icons 第三方库
// npm i react-icons
// 可在react-icons官网查看

// supabase
// 连接supabase和react app
// npm i --save @supabase/supabase-js
// 在services下创建supabase.js 在API doc中找到代码粘贴并替换supabasekey

// React Query 管理remote state
// npm i @tanstack/react-query@4
// 安装react-query devtools
// npm i @tanstack/react-query-devtools
// 在App.jsx中
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// const queryClient = new QueryClient();
// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <ReactQueryDevtools initialIsOpen={false} />
//       ...
//     </QueryClientProvider>
//   );
// }

// react query fetch and store data
// import { useQuery } from "@tanstack/react-query";
// const { isLoading, data, error } = useQuery({
//   queryKey: ["cabin", id], //参数一为存储在cach中的名字，参数二为依赖数组，当依赖数组改变时(比如id改变)，会重新fetch数据
//   queryFn: getCabins, //自定义function to fetch data，return promise
// });

// react query add remote state
import { useMutation, useQueryClient } from "@tanstack/react-query";
const queryClient = useQueryClient();
const { isLoading: isCreating, mutate } = useMutation({
  mutationFn: addCabin,
  onSuccess: (data) => {
    //onSuccess可以接受参数data（mutationFn返回的结果）
    queryClient.invalidateQueries({
      queryKey: ["cabins"], //也可以直接写为active: true 将所有queryKey更新
    });
  },
  onError: (err) => alert(err.message),
});
function onsubmit(data) {
  mutate(data); //提交数据
}

// react query delete data
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// const queryClient = useQueryClient();
// const { isLoading: isDeleting, mutate } = useMutation({
//   mutationFn: (id) => deleteCabin(id),
//   onSuccess: () => {
//     queryClient.invalidateQueries({
//       queryKey: ["cabins"],
//     });
//   },
//   onError: (err) => alert(err.message),//onError可以捕获到mutationFn中抛出的异常
// });
// <button onClick={() => mutate(cabinId, {onSettled: () => ...})} disable = {isDeleting}>delete</button>; //参数二中onSettled表示不论成功或出错，都会调用该函数。

// react query prefetch data
// const queryClient = useQueryClient();
// queryClient.prefetchQuery({
//   queryKey: ['bookings'],
//   queryFn: ...
// })

// queryClient.removeQueries() 用于清除react query cach

// queryClient.setQueryData(['user'], user) 用于手动更新cach

// react-hot-toast react第三方库 弹出框
// npm i react-hot-toast
// 在App.jsx中
// import { Toaster } from "react-hot-toast";
// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Toaster />
//       <BrowserRouter>
//         <Routes>
//           ...
//         </Routes>
//       </BrowserRouter>
//     </QueryClientProvider>
//   );
// }
// 需要弹窗时
// import { toast } from "react-hot-toast";
// toast.success("delete success");
// toast.error(err.message);

// react-hook-form 第三方库 处理form
// npm i react-hook-form
// import { useForm } from "react-hook-form";
// function CreateCabinForm() {
//   const { register, handleSubmit } = useForm();
//   function onSubmit(data) {
//     console.log(data);
//   }
// function onError(errors) {
//   console.log(errors);
// }
//   return (
//     <Form onSubmit={handleSubmit(onSubmit, onError)}> //当表单通过验证时，调用onSubmit，错误时，调用onError
//       <FormRow>
//         <Label htmlFor="name">Cabin name</Label>
//         <Input type="text" id="name" {...register("name", { required: "This field is required", min: {value: 1, message: "at least 1"} })} /> //第一个参数和id一致，required表示该项必填，后面为未填时的报错信息
//       </FormRow>
//       <FormRow>
//         <Label htmlFor="discount">Discount</Label>
//         <Input
//           type="number"
//           id="discount"
//           defaultValue={0}
//           {...register("discount")} //第一个参数和id一致
//         />
//       </FormRow>
//       <FormRow>
//         <Button>Add cabin</Button>
//       </FormRow>
//     </Form>
//   );
// }

// react组件作为children传入父组件，在父组件可以通过children.props.属性名 在父组件来访问子组件的属性

// createPortal 可以使组件在任何位置render，但原来所处的dom树位置不变
// import { createPortal } from "react-dom";
// function Modal() {
//   return createPortal(<div>hello</div>, document.body); //参数一为要放置的组件，参数二为放置的位置
// }

// 实现点击模态框外关闭模态框的效果
// const modalRef = useRef(); //存储模态框，通过current访问
// useEffect(
//   function () {
//     function handleClick(e) {
//       if (modalRef.current && !modalRef.current.contains(e.target)) close();
//     }
//     document.addEventListener("click", handleClick, true); //取消冒泡
//     return () => document.removeEventListener("click", handleClick, true);
//   },
//   [close]
// );
// <Modal ref={modalRef} />; //使用useRef选中模态框

// Authorization Protected Route 身份认证
// 可以创建一个ProtectedRoute组件，将AppLayout作为该组件的children，在ProtectedRoute中进行身份认证，从而实现只有登录之后的user可以访问到AppLayout下的所有路由
// 在ProtectedRoute中：
// 1.load authenticated user
// 2.while loading，show a spinner
// 3.if there is no authenticated user, redirect to login
// 4.if there is a user, render the app

// recharts 第三方库 react图表
// npm i recharts@2

// error boundaries 处理react app render时出现的错误
// npm i react-error-boundary
// 在main.jsx中
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback";
<ErrorBoundary
  FallbackComponent={ErrorFallback}
  onReset={() => window.location.replace("/")}
>
  <App />
</ErrorBoundary>;
// 在ui文件夹中创建ErrorFallback.jsx
// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <>
//       <Heading as="h1">Something went wrong 🧐</Heading>
//       <p>{error.message}</p>
//       <Button onClick={resetErrorBoundary}>
//         Try again
//       </Button>
//     </>
//   );
// }
// export default ErrorFallback;

// react app 线上发布 netlify/vercel
// 若选择在netlify部署，在项目根目录中创建文件netlify.toml，编写
// [[redirects]]
// from = "/*"
// to = "/index.html"
// status = 200
// 将整个项目打包到dist中 npm run build
// 创建本地git仓库，连接github远程仓库，提交代码
