import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";

Todolist.propTypes = {
  todolist: PropTypes.array,
  onTodoclick: PropTypes.func,
};

Todolist.defaultProps = {
  todolist: [],
  onTodoclick: null,
};

function Todolist({ TodoList, onTodoclick }) {
  const handleTodoclick = (todo, index) => {
    if (!onTodoclick) return;

    onTodoclick(todo, index);
  };
  return (
    <ul className="todo-list">
      {TodoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoclick(todo, index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default Todolist;
