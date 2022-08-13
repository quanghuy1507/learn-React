import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import productApi from "./api/productApi";
import Todo from "./features/Todo";
import Album from "./features/Album";
import Colorbox from "./component/Colorbox";
import Todolist from "./component/Todolist";
import Clock from "./component/Clock";
import Postlist from "./component/Postlist";

function App() {
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const productList = await productApi.getAll();
  //     console.log(productList);
  //   };
  //   fetchProduct();
  // }, []);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/album">Album</Link>
          </li>
          <li>
            <Link to="/colorbox">Colorbox</Link>
          </li>
          <li>
            <Link to="/todolist">TodoList</Link>
          </li>
          <li>
            <Link to="/clock">Clock</Link>
          </li>
          <li>
            <Link to="/postlist">PostList</Link>
          </li>
        </ul>
      </nav>
      Home page
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/album" element={<Album />} />
        <Route path="/colorbox" element={<Colorbox />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/postlist" element={<Postlist />} />
      </Routes>
    </div>
  );
}

export default App;
