import axios from "axios";

const TODO_URL = "http://localhost:3003/todo";

const api = {
  getAll: async () => {
    const res = await axios.get(TODO_URL);
    return res.data;
  },

  post: async (newTodo) => {
    const res = await axios.post(TODO_URL, newTodo);
    return res.data;
  },

  delete: async (todo) => {
    await axios.delete(`${TODO_URL}/${todo.id}`);
  },

  patch: async (todo) => {
    const res = await axios.put(`${TODO_URL}/${todo.id}`, todo );
    return res.data;
  }
}

export default api;