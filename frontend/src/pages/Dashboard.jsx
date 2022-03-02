import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Dashboard = () => {
    return (
        <>
            <section className="heading">
                <h1>Welcome Khalil</h1>
                <p>Todos Dashboard</p>
            </section>
            <TodoForm />
            <TodoList />
        </>
    );
};

export default Dashboard;
