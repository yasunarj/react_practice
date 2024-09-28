import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState, useEffect, useRef } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((todos: RootState) => todos.todoManage.todos);
  const [ editingIndex, setEditingIndex ] = useState(() => {
    const initial = todos.findIndex(todo => todo.editing);
    return initial !== -1 ? initial : -1;
  });
  const editingIndexRef = useRef(editingIndex);
  
  useEffect(() => {
    const initial = todos.findIndex(todo => todo.editing);
    if(initial !== editingIndexRef.current) {
      setEditingIndex(initial);
      editingIndexRef.current = initial;
    }
  }, [todos]);

  const handleEditing = (index) => {
    //ダブルクリックされたtodoのindex番号をeditingIndexに代入している
    setEditingIndex(index);
  }
  return (
    <>
      <div className="w-80 mx-auto mb-8">
        {todos.map((todo, index) => {
          return (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              index={index}
              editingIndex={editingIndex}
              setEditingIndex={handleEditing}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoList
