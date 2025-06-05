const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "tasks.json");

function readTasks() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

const getTasks = (req, res) => {
  const tasks = readTasks();
  const { status } = req.query;

  let filteredTasks = tasks;

  if (status === "completed") {
    filteredTasks = tasks.filter((task) => task.completed === true);
  } else if (status === "pending") {
    filteredTasks = tasks.filter((task) => task.completed === false);
  }

  res.json(filteredTasks);
};

const createTask = (req, res) => {
  const tasks = readTasks();
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    completed: false,
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const tasks = readTasks();
  const { id } = req.params;

  const taskIndex = tasks.findIndex((t) => t.id == id);
  if (taskIndex === -1)
    return res.status(404).json({ message: "Task not found" });

  tasks[taskIndex].completed = true;
  writeTasks(tasks);

  res.json(tasks[taskIndex]);
};

const deleteTask = (req, res) => {
  let tasks = readTasks();
  const { id } = req.params;

  const exists = tasks.some((t) => t.id == id);
  if (!exists) return res.status(404).json({ message: "Task not found" });

  tasks = tasks.filter((t) => t.id != id);
  writeTasks(tasks);

  res.json({ message: "Task deleted" });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
