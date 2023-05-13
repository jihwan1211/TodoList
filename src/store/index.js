import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialTodoInputState = { text: "" };
const undoTodoList = {
  list: [
    {
      content: "",
      key: 0,
    },
  ],
};
const doneTodoLists = { list: [] };

const todoInput = createSlice({
  name: "todoInput",
  initialState: initialTodoInputState,
  reducers: {
    add(state, action) {
      state.text = action.payload;
    },
    remove() {},
  },
});

const undoneTodoList = createSlice({
  name: "undoneTodoList",
  initialState: undoTodoList,
  reducers: {
    add(state, action) {
      state.list = [...state.list, action.payload];
    },
    remove(state, action) {
      state.list = state.list.filter((it) => it.key !== action.payload);
    },
  },
});

const doneTodoList = createSlice({
  name: "doneTodoList",
  initialState: doneTodoLists,
  reducers: {
    add(state, action) {
      state.list = [...state.list, action.payload];
    },
  },
});

const store = configureStore({
  reducer: {
    todoInput: todoInput.reducer,
    undoneTodoList: undoneTodoList.reducer,
    doneTodoList: doneTodoList.reducer,
  },
});

export const todoInputActions = todoInput.actions;
export const undoneTodoListActions = undoneTodoList.actions;
export const doneTodoListActions = doneTodoList.actions;
export default store;
