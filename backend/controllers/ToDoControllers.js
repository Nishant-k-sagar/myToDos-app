// ToDoControllers.js

const ToDoModel = require("../models/ToDoModel");

module.exports.getToDos = async (req, res) => {
    const { email } = req.body;
    try {
        const toDos = await ToDoModel.find({ email });
        res.send(toDos);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message, msg: "Something went wrong!" });
    }
};

module.exports.saveToDo = async (req, res) => {
    const { toDo, email } = req.body;
    try {
        const data = await ToDoModel.create({ toDo, email });
        console.log("Task Saved...");
        res.status(201).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message, msg: "Something went wrong!" });
    }
};

module.exports.deleteToDo = async (req, res) => {
    const { id } = req.params;
    try {
        await ToDoModel.findByIdAndDelete(id);
    
        console.log("Deleted...");
        res.send("Deleted...");
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message, msg: "Something went wrong!" });
    }
};
