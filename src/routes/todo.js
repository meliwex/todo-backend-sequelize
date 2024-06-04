const express = require("express");
const { createTodo, getTodos, getTodoById, updateTodo, deleteTodo } = require("../controllers/todo")

const router = express.Router();



// create 
router.post("/", createTodo);

// read 
router.get("/", getTodos);
router.get("/:id", getTodoById);

// update
router.put("/:id", updateTodo);

// delete 
router.delete("/:id", deleteTodo);


module.exports = router;