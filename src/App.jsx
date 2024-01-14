import { TodoList } from "./components/todolist";

function App() {
  return (
    <div className="flex w-full h-screen bg-gradient-to-r from-sky-400 to-indigo-600 items-center justify-center">
      <TodoList />
    </div>
  );
}

export default App;
