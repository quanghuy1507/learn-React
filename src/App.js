import React from "react";
import { Route } from "react-router-dom";
import Todo from "./features/Todo";
import Album from "./features/Album";
import Colorbox from "./component/Colorbox";
import Todolist from "./component/Todolist";
import Clock from "./component/Clock";
import Postlist from "./component/Postlist";

function App() {
  return (
    <div className="App">
      Home page
      <Route path="/todo" component={Todo} />
      <Route path="/album" component={Album} />
      <Route path="/colorbox" component={Colorbox} />
      <Route path="/todolist" component={Todolist} />
      <Route path="/clock" component={Clock} />
      <Route path="/postlist" component={Postlist} />
    </div>
  );
}

export default App;
