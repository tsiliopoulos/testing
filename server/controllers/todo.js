let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

// create a reference to the db schema
let todoModel = require('../models/todo');

module.exports.displayToDoList = (req, res, next) => {
    todoModel.find((err, todoList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.json({ success: true, msg: 'ToDo List Displayed Successfully', todoList: todoList, user: req.user });
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.json({ success: true, msg: 'Successfully Displayed Add Page' });
}

module.exports.processAddPage = (req, res, next) => {

    let newToDo = todoModel({
        "subject": req.body.subject,
        "description": req.body.description,
        "category": req.body.category,
        "date": req.body.date
    });

    todoModel.create(newToDo, (err, todoModel) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({ success: true, msg: 'Successfully Added New ToDo' });
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    todoModel.findById(id, (err, todoObject) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({ success: true, msg: 'Successfully Displayed ToDo to Edit', todo: todoObject });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedToDo = todoModel({
        "_id": id,
        "subject": req.body.subject,
        "description": req.body.description,
        "category": req.body.category,
        "date": req.body.date
    });

    todoModel.update({ _id: id }, updatedToDo, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({ success: true, msg: 'Successfully Edited ToDo', todo: updatedToDo });
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    todoModel.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({ success: true, msg: 'Successfully Deleted ToDo' });
        }
    });
}

