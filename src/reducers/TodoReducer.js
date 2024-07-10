import { v4 } from "uuid";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          title: action.todo.title,
          create: new Date().toDateString(),
          id: v4(),
        },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
