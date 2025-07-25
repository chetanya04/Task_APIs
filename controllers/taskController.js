const { v4: uuidv4 } = require('uuid');
const tasks = require('../models/taskModel');

exports.createTask = (req, res) => {
  const { title, description, status = "PENDING" } = req.body;
  const newTask = {
    id: uuidv4(),
    title,
    description,
    status,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  const { title, description, status } = req.body;
  if (title) task.title = title;
  if (description) task.description = description;
  if (status) task.status = status;
  task.updatedAt = new Date().toISOString();

  res.json(task);
};

exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Task not found" });

  tasks.splice(index, 1);
  res.status(204).send();
};
