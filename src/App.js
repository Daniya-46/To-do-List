import React from "react";
import { TodoContextProvider } from "./contexts/TodoContext";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <TodoContextProvider>
          <Navbar />
          <TodoList />
          <NewTodoForm />
        </TodoContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
