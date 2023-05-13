import { useSelector } from "react-redux";

const DoneTodoList = () => {
  const doneTodoList = useSelector((state) => state.doneTodoList.list);

  return (
    <div>
      <ul>
        {doneTodoList.map((it) => {
          return <li>{it.content}</li>;
        })}
      </ul>
    </div>
  );
};

export default DoneTodoList;
