import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTodos } from "../redux/store";
import { getTodos, reset } from "../redux/todoSlice";
import Spinner from "./Spinner";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const dispatch = useDispatch();
    const { todos, isLoading, isError, message } = useTodos();

    useEffect(() => {
        const unSub = () => {
            if (isError) console.log(message);
            dispatch(getTodos());
        };
        unSub();
        return () => {
            dispatch(reset());
        };
    }, [isError, message, dispatch]);
    if (isLoading) return <Spinner />;
    return (
        <section className="todos">
            {todos.length > 0 ? (
                todos.map((todo) => <TodoItem key={todo._id} todo={todo} />)
            ) : (
                <h2>No Todos Set. Please Add One</h2>
            )}
        </section>
    );
};

export default TodoList;
