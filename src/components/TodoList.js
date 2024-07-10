import React, { useContext } from "react";

import { TodoContext } from "../contexts/TodoContext";
import TodoDetails from "./TodoDetails";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div className="todo-list">
      <ol>
        {todos.map((todo) => {
          return <TodoDetails todo={todo} key={todo.id} />;
        })}
      </ol>
    </div>
  ) : (
    <div className="empty">No tasks to do. WooHoo!!</div>
  );
};

export default TodoList;
