import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const NewTodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: { title },
    });
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="New Task ..."
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input type="submit" value={"Add Task"} />
    </form>
  );
};

export default NewTodoForm;
