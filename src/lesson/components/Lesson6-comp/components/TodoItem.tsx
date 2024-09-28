import api from "../api";
import { useDispatch } from "react-redux";
import { deleteData, patchData } from "../store/store";
import { useState, useRef, useEffect } from "react";

const TodoItem = ({ todo, index, editingIndex, setEditingIndex }) => {
  // console.log(index, editingIndex);
  const [patchState, setPatchState] = useState(todo.title);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    if(todo.editing && index === editingIndex && todo.editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [index, editingIndex, todo.editing]);

  const deleteTodo = () => {
    api.delete(todo);
    dispatch(deleteData(todo));
  };

  const patchText = (e) => {
    setPatchState(e.target.value);
  };

  const createNewTodo = () => {
    return {
      id: todo.id,
      title: patchState,
      editing: !todo.editing,
      completed: todo.completed,
    };
  };

  const invertEditing = () => {
    //このtodoのindex番号をeditingIndexに代入している
    const newTodo = createNewTodo();
    api.patch(newTodo).then(() => {
      setEditingIndex(index);
      dispatch(patchData(newTodo));
    });
  };

  const patchTodo = (e) => {
    e.preventDefault();
    const newTodo = createNewTodo();
    api.patch(newTodo);
    dispatch(patchData(newTodo));
  };

  return (
    <>
      {!todo.editing ? (
        <div
          key={todo.id}
          className="flex justify-between items-center  font-semibold text-lg text-gray-700 mb-2"
        >
          <span onDoubleClick={invertEditing}>{todo.title}</span>
          <button
            className="text-gray-700 text-sm border-2 border-gray-400 px-1 bg-gray-200"
            onClick={deleteTodo}
          >
            完了
          </button>
        </div>
      ) : (
        <div className="mb-2">
          <form onSubmit={patchTodo}>
            <input
              type="text"
              value={patchState}
              className="p-1 border-2 border-gray-300 text-gray-700"
              onChange={patchText}
              ref={inputRef}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default TodoItem;
