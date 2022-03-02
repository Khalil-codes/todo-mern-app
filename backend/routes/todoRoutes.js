const express = require("express");
const {
    getTodos,
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo,
} = require("../controllers/todoController");
const router = express.Router();

router.route("/").get(getTodos).post(createTodo);
router.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

module.exports = router;
