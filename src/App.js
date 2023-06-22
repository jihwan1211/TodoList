import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import UndoneTodoList from "./components/UndoneTodoList";
import TodoListInput from "./components/TodoListInput";
import DoneTodoList from "./components/DoneTodoList";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/todoList"
            element={<UndoneTodoList></UndoneTodoList>}
          ></Route>
          <Route
            path="/doneTodoList"
            element={<DoneTodoList></DoneTodoList>}
          ></Route>
        </Routes>
      </BrowserRouter> */}
      <Home></Home>
      <div className="TodoLists">
        <UndoneTodoList></UndoneTodoList>
        <DoneTodoList></DoneTodoList>
      </div>
    </div>
  );
}

export default App;
