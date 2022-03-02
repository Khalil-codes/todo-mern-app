const getTodos = (req, res) => {
    res.status(200).json({
        status: "success",
        result: 10,
        data: {
            todos: "<Todos over here>",
        },
    });
};

const createTodo = (req, res) => {
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
};

const getTodo = (req, res) => {
    if (+req.params.id > 10) {
        res.status(400);
        throw new Error(`Todo with ID ${req.params.id} not found`);
    }
    res.status(200).json({
        status: "success",
        data: {
            todo: `<Todo ${req.params.id} over here>`,
        },
    });
};

const updateTodo = (req, res) => {
    if (+req.params.id > 10) {
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
};

const deleteTodo = (req, res) => {
    if (+req.params.id > 10) {
        res.status(400);
        throw new Error(`Todo with ID ${req.params.id} not found`);
    }
    res.status(200).json({
        status: "success",
        data: {
            id: +req.params.id,
        },
    });
};

module.exports = {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
};
