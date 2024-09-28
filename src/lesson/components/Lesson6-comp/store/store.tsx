import { createSlice, configureStore } from "@reduxjs/toolkit";


const todoManage = createSlice({
  name: "todoManage",
  initialState: {
    todos: []
  },
  reducers: {
    getData: (state, { payload }) => {
      state.todos = payload;
    },
    addData: (state, { payload }) => {
      state.todos.push(payload);
    },
    deleteData: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== payload.id;
      });
    },
    patchData: (state, { payload }) => {
      state.todos = state.todos.map((todo) => {
        return (
          {
            id: todo.id,
            title: todo.id === payload.id ? payload.title : todo.title,
            editing: todo.id === payload.id ? !todo.editing : todo.editing,
            completed: todo.completed
          }
        );
      });
    },
  }
});

const { getData, addData, deleteData, patchData } = todoManage.actions;

const store = configureStore({
  reducer: {
    todoManage: todoManage.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export { getData, addData, deleteData, patchData };
export default store;