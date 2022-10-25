import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  const addNewTodoHandler = (text: string) => {};
  return (
    <>
      <NewTodo onAddNewTodo={addNewTodoHandler} />
      <Todos items={todos} />
    </>
  );
}

export default App;
