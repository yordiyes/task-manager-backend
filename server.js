const express = require("express");
const tasksRouter = require("./routes/tasks");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/tasks", tasksRouter);

app.get("/", (req, res) => {
  res.send(
    '<h2 style="color: green; font-family: Arial, sans-serif;">✅ Task Manager API is running</h2>'
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
