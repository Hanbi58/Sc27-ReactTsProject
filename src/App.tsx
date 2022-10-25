import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  return (
    <>
      <NewTodo />
      <Todos items={todos} />
    </>
  );
}

export default App;
