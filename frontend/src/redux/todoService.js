import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

const getGoals = async () => {
    const response = await axios.get(API_URL);
    return response.data.data.todos;
};
const createTodo = async (todoData) => {
    const response = await axios.post(API_URL, todoData);
    return response.data.data.todo;
};
const updateTodo = async (id) => {
    const response = await axios.patch(`${API_URL}/${id}`);
    return response.data.data.id;
};
const deleteTodo = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data.data.id;
};
const todoService = {
    getGoals,
    createTodo,
    updateTodo,
    deleteTodo,
};

export default todoService;
