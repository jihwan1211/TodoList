import "./App.css";

import Header from "./components/Header";
import UndoneTodoList from "./components/UndoneTodoList";
import TodoListInput from "./components/TodoListInput";
import DoneTodoList from "./components/DoneTodoList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TodoListInput></TodoListInput>
      <div className="TodoLists">
        <UndoneTodoList></UndoneTodoList>
        <DoneTodoList></DoneTodoList>
      </div>
    </div>
  );
}

export default App;
