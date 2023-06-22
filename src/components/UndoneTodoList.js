import { Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doneTodoListActions, undoneTodoListActions } from "../store";
import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 1rem;
  margin: 0;
`;

export const ListChild = styled.div`
  width: 10rem;
  margin: 1rem;
  border-bottom: 5px solid;
  border-bottom-color: ${(props) => props.color || "grey"};
  display: block;
`;

export const TodoListContainer = styled.div`
  display: flex;
`;

export const StyledLi = styled.div`
  word-wrap: break-word;
`;

export const UndoTodoList = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function MakeListChild(color, children) {
  return <ListChild color={color}>{children}</ListChild>;
}

const TodoList = () => {
  const undoTodoList = useSelector((state) => state.undoneTodoList.list);

  const dispatch = useDispatch();

  const handleComplete = (key) => {
    //완료된 todo를 찾아
    const completedTodo = undoTodoList.filter((it) => it.key === key);

    dispatch(doneTodoListActions.add(completedTodo[0]));
    dispatch(undoneTodoListActions.remove(key));
  };

  return (
    <UndoTodoList>
      <Typography variant="h6">UnDoneTodoList</Typography>
      <StyledUl>
        {undoTodoList.map((it) => {
          if (it.key > 0) {
            return (
              <TodoListContainer>
                {MakeListChild("skyblue", <StyledLi>{it.content}</StyledLi>)}
                <Button
                  variant="outlined"
                  key={it.key}
                  onClick={() => {
                    handleComplete(it.key);
                  }}
                >
                  완료!
                </Button>
              </TodoListContainer>
            );
          }
        })}
      </StyledUl>
    </UndoTodoList>
  );
};

export default TodoList;
