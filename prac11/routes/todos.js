const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

//POST

router.post('/post', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//GET

router.get('/get', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// UPDATE

router.put('/post/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// DELETE

router.delete('/delete/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id); 
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
