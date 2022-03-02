const Todo = require("../models/todoModel");
const asyncHandler = require("express-async-handler");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find().sort([["createdAt", "desc"]]);
    res.status(200).json({
        status: "success",
        result: todos.length,
        data: {
            todos,
        },
    });
});

// @desc    Create goal
// @route   POST /api/goals
// @access  Private
const createTodo = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please Add Text Field in the Body");
    }
    const todo = await Todo.create({ text: req.body.text });
    res.status(201).json({
        status: "success",
        data: {
            todo,
        },
    });
});

// @desc    Get goal
// @route   GET /api/goals/:id
// @access  Private
const getTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        res.status(400);
        throw new Error(`Todo with ID ${req.params.id} not found`);
    }
    res.status(200).json({
        status: "success",
        data: {
            todo,
        },
    });
});

// @desc    Update goals
// @route   PATCH /api/goals/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        res.status(400);
        throw new Error(`Todo with ID ${req.params.id} not found`);
    }
    await Todo.findByIdAndUpdate(req.params.id, {
        completed: !todo.completed,
    });
    res.status(200).json({
        status: "success",
        data: {
            id: req.params.id,
        },
    });
});

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        res.status(400);
        throw new Error(`Todo with ID ${req.params.id} not found`);
    }
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: "success",
        data: {
            id: req.params.id,
        },
    });
});

module.exports = {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
};
