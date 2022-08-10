import React, { useState } from "react";
// import PropTypes from "prop-types";
import Todo from "./component/Todo";
import Todoform from "./component/TodoForm";

function Todolist() {
  const [todoList, setTodolist] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  function handleTodoclick(todo) {
    // console.log(todo);
    //   tìm vị trí index
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodolist = [...todoList];
    newTodolist.splice(index, 1);
    setTodolist(newTodolist);
  }

  function handleTodoFormSubmit(formValue) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    const newTodolist = [...todoList];
    newTodolist.push(newTodo);
    setTodolist(newTodolist);
  }

  return (
    <div>
      <Todoform onSubmit={handleTodoFormSubmit} />
      <Todo todos={todoList} onTodoClick={handleTodoclick} />
    </div>
  );
}

Todolist.propTypes = {};

export default Todolist;
