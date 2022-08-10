import React from "react";
import PropTypes from "prop-types";

const Todo = (props) => {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

Todo.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

Todo.defaultProps = {
  todos: [],
  onTodoClick: null,
};

export default Todo;
