import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todoService from "./todoService";

const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
    message: "",
};

export const getTodos = createAsyncThunk(
    "todos/getAll",
    async (_, thunkAPI) => {
        try {
            return await todoService.getGoals();
        } catch (error) {
            const message =
                error?.response?.data?.message ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);
export const createTodo = createAsyncThunk(
    "todos/create",
    async (todoData, thunkAPI) => {
        try {
            return await todoService.createTodo(todoData);
        } catch (error) {
            const message =
                error?.response?.data?.message ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);
export const updateTodo = createAsyncThunk(
    "todos/complete",
    async (id, thunkAPI) => {
        try {
            return await todoService.updateTodo(id);
        } catch (error) {
            const message =
                error?.response?.data?.message ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);
export const deleteTodo = createAsyncThunk(
    "todos/delete",
    async (id, thunkAPI) => {
        try {
            return await todoService.deleteTodo(id);
        } catch (error) {
            const message =
                error?.response?.data?.message ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.todos = action.payload;
            })
            .addCase(getTodos.rejected, (state, action) => {
                state.isLoading = false;
                state.message = action.payload;
            })
            .addCase(createTodo.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.todos.unshift(action.payload);
            })
            .addCase(createTodo.rejected, (state, action) => {
                state.isLoading = false;
                state.message = action.payload;
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.todos = state.todos.map((todo) =>
                    todo._id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                );
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.todos = state.todos.filter(
                    (todo) => todo._id !== action.payload
                );
            });
    },
});
export const { reset } = todoSlice.actions;
export default todoSlice.reducer;
