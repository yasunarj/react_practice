import api from "./api";
import "./api";
import { useDispatch } from "react-redux"; 
import { useEffect } from "react";
import { getData } from "./store/store";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const Todo: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getAll().then(todos => {
      dispatch(getData(todos));
    })
  }, [dispatch]);

  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
};

export default Todo;
