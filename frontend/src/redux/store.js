import { configureStore } from "@reduxjs/toolkit";
import {useSelector} from 'react-redux'
import todoReducer from './todoSlice';
const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

export const useTodos = () => useSelector((state)=> state.todos)
export default store