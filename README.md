# Task Manager Backend API

This is a simple RESTful API built with Node.js and Express for managing tasks.

## Features

- View all tasks
- Add a new task
- Mark tasks as completed
- Delete tasks
- Filter by status: completed or pending
- Validates empty titles
- API landing page

## Endpoints

- `GET /api/tasks` – Get all tasks
  - `GET/api/tasks?status=completed` – Get all completed tasks
  - `GET /api/tasks?status=pending` – Get all pending tasks
- `POST /api/tasks` – Add a new task
- `PUT /api/tasks/:id` – Mark task as completed
- `DELETE /api/tasks/:id` – Delete a task

## Getting Started

```bash
git clone https://github.com/yordiyes/task-manager-backend.git
cd task-manager-backend
npm install
npm start
```
