import { useSelector, useDispatch } from "react-redux";
import { doneTodoListActions, undoneTodoListActions } from "../store";

const TodoList = () => {
  const undoTodoList = useSelector((state) => state.undoneTodoList.list);

  const dispatch = useDispatch();

  const handleComplete = (key) => {
    //완료된 todo를 찾아
    const completedTodo = undoTodoList.filter((it) => it.key === key);

    dispatch(doneTodoListActions.add(completedTodo[0]));
    dispatch(undoneTodoListActions.remove(key));
  };

  console.log(undoTodoList);
  return (
    <div className="undoTodoList">
      <ul>
        {undoTodoList.map((it) => {
          if (it.key > 0) {
            return (
              <div className="ListChild">
                <li>{it.content}</li>
                <button
                  key={it.key}
                  onClick={() => {
                    handleComplete(it.key);
                  }}
                >
                  완료!
                </button>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default TodoList;
