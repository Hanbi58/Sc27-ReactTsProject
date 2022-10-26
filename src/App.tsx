import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addNewTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };
  return (
    <>
      <NewTodo onAddNewTodo={addNewTodoHandler} />
      <Todos items={todos} />
    </>
  );
}

export default App;
