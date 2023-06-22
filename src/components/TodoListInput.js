import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoInputActions, undoneTodoListActions } from "../store";
import { TextField, Button, Input } from "@mui/material";
import styled from "styled-components";

const ariaLabel = { "aria-label": "description" };
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

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

  //todoObject가 만들어졌으면 undoneTodoList에 추가.
  useEffect(() => {
    dispatch(undoneTodoListActions.add(todoObject));
    id.current += 1;
    setTodoInput("");
  }, [todoObject]);

  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <label for="todoInput">할 일을 입력하세요</label>
        <Input
          id="todoInput"
          onChange={handleChange}
          value={todoInput}
          inputProps={ariaLabel}
        />
        <Button variant="contained">입력</Button>
      </form>
    </StyledDiv>
  );
};

export default TodoListInput;
