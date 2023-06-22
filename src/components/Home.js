import { Typography } from "@mui/material";
import TodoListInput from "./TodoListInput";

const Home = () => {
  return (
    <div>
      <Typography variant="h1">TodoList!</Typography>
      <TodoListInput></TodoListInput>
    </div>
  );
};

export default Home;
