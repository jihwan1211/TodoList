import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoInputActions, undoneTodoListActions } from "../store";

const TodoListInput = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoObject, setTodoObject] = useState({
    content: "",
    key: 0,
  });
  const id = useRef(0);
  const dispatch = useDispatch();

  //input change 감지
  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  //todolist 제출
  const handleSubmit = (e) => {
    e.preventDefault();

    setTodoObject({
      content: todoInput,
      key: id.current,
    });
  };

  useEffect(() => {
    dispatch(undoneTodoListActions.add(todoObject));
    id.current += 1;
    setTodoInput("");
  }, [todoObject]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="todoInput">할 일을 입력하세요</label>
        <input id="todoInput" onChange={handleChange} value={todoInput}></input>
        <button>입력</button>
      </form>
    </div>
  );
};

export default TodoListInput;
