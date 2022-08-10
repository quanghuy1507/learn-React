import PropTypes from "prop-types";
import { useState } from "react";
import Todolist from "./component/Todolist";

Todo.protoTypes = {};
function Todo(props) {
  const inittodolist = [
    {
      id: 1,
      title: "JavaScript",
      status: "new",
    },
    {
      id: 2,
      title: "PHP",
      status: "completed",
    },
    {
      id: 3,
      title: "Ruby",
      status: "new",
    },
    {
      id: 4,
      title: "Java",
      status: "new",
    },
  ];
  const [todolist, setTodolist] = useState(inittodolist);
  const [filterStatus, setFilterStatus] = useState("all");

  const handleTodoclick = (todo, index) => {
    const newtodolist = [...todolist];

    newtodolist[index] = {
      ...newtodolist[index],
      status: newtodolist[index].status === "new" ? "completed" : "new",
    };

    setTodolist(newtodolist);
  };

  const handleShowAll = () => {
    setFilterStatus("all");
  };
  const handleShowCompleted = () => {
    setFilterStatus("completed");
  };
  const handleShowNew = () => {
    setFilterStatus("new");
  };

  const renderTodolist = todolist.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  console.log(renderTodolist);

  return (
    <div>
      <h1>Todo List</h1>
      <Todolist TodoList={renderTodolist} onTodoclick={handleTodoclick} />
      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompleted}> Show completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </div>
  );
}
export default Todo;
