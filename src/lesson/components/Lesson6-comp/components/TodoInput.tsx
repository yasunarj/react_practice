import { useState, ChangeEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../store/store";
import api from "../api";

const TodoInput = () => {
  const [inputState, setInputState] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const inputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  const createTodo = () => {
    const newTodo = {
      id: String(Math.random()),
      title: inputState,
      editing: false,
      completed: false,
    }
    return newTodo;
  }

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = createTodo();
    api.post(newTodo);
    dispatch(addData(newTodo));
    setInputState("");
    inputRef.current.focus();
  }

  return (
    <>
      <form className="text-center mb-8" onSubmit={addTodo}>
        <label className="text-gray-700 font-bold text-lg" htmlFor="todo">
          todoを追加する：
        </label>
        <input
          className="border-2 p-1 text-gray-700"
          type="text"
          placeholder="ここに入力する"
          id="todo"
          value={inputState}
          onChange={inputText}
          ref={inputRef}
        />
        <button className="text-gray-700 text-sm border-2 border-gray-400 p-1 ml-2 bg-gray-200">追加</button>
      </form>
    </>
  );
};

export default TodoInput;
