//ToDoRoutes.js

const { Router } = require("express");
const { getToDos, saveToDo, deleteToDo } = require("../controllers/ToDoControllers"); 

const router = Router();

router.post("/get", getToDos);
router.post("/save", saveToDo);
router.delete("/delete/:id", deleteToDo);

module.exports = router;
