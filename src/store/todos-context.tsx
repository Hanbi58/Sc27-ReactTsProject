import React from "react";
import Todo from "../models/todo";
import { useState } from "react";
export const TodosContext = React.createContext<{
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (id: string) => {},
});

type Props = {
  children?: React.ReactNode;
};

const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addNewTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const deleteHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const contextValue = {
    items: todos,
    addTodo: addNewTodoHandler,
    removeTodo: deleteHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
