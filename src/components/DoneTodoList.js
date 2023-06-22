import { List, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  MakeListChild,
  StyledUl,
  StyledLi,
  UndoTodoList as Container,
} from "./UndoneTodoList";

const DoneTodoList = () => {
  const doneTodoList = useSelector((state) => state.doneTodoList.list);

  return (
    <Container>
      <Typography variant="h6">DoneTodoList</Typography>
      <StyledUl>
        {doneTodoList.map((it) => {
          return MakeListChild("red", <StyledLi>{it.content}</StyledLi>);
        })}
      </StyledUl>
    </Container>
  );
};

export default DoneTodoList;
