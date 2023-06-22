import { Typography, AppBar, Toolbar } from "@mui/material";
import TodoListInput from "./TodoListInput";

const Home = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TodoList
          </Typography>
        </Toolbar>
      </AppBar>
      <TodoListInput></TodoListInput>
    </div>
  );
};

export default Home;
