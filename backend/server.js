const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/todos", (req, res) => {
    res.status(200).json({
        status: "success",
        result: 10,
        data: {
            todos: "<Todos over here>",
        },
    });
});

app.post("/api/todos", (req, res) => {
    if (!req.body.title) {
        res.status(400);
        throw new Error("Please Add Title Field in the Body");
    }
    res.status(201).json({
        status: "success",
        data: {
            todo: `New Todo with Title: ${req.body.title}`,
        },
    });
});

app.get("/api/todos/:id", (req, res) => {
    if (req.params.id > 10) {
        res.status(400);
        throw new Error(`Todo with ID ${req.params.id} not found`);
    }
    res.status(200).json({
        status: "success",
        data: {
            todo: `<Todo ${req.params.id} over here>`,
        },
    });
});

app.patch("/api/todos/:id", (req, res) => {
    if (req.params.id > 10) {
        res.status(400);
        throw new Error(`Todo with ID ${req.params.id} not found`);
    }
    if (!req.body.title) {
        res.status(400);
        throw new Error("Please Add Title Field in the Body");
    }
    res.status(200).json({
        status: "success",
        data: {
            todo: `<Updated Todo ${req.params.id} over here>`,
        },
    });
});

app.delete("/api/todos/:id", (req, res) => {
    if (req.params.id > 10) {
        res.status(400);
        throw new Error(`Todo with ID ${req.params.id} not found`);
    }
    res.status(204).json({
        status: "success",
        data: {
            id: req.params.id,
        },
    });
});

app.listen(port, () => console.log(`Server Started at port ${port}`));
