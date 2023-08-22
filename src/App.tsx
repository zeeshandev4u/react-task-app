import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ListTasks from "./components/ListTasks";
import CreateTask from "./components/CreateTask";
import BulkDelete from "./components/BulkDelete";

interface Task {
  id: number;
  name: string;
}
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const deleteTask = (selectedTasks: Task[]) => {
    const updatedTasks = tasks.filter((task) => !selectedTasks.includes(task));
    setTasks([...updatedTasks]);
  };
  const createTask = (task: Task) => {
    setTasks([...tasks, task]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create-task"
          element={<CreateTask createTask={createTask} tasks={tasks} />}
        />
        <Route path="/list-tasks" element={<ListTasks tasks={tasks} />} />
        <Route
          path="/bulk-delete"
          element={<BulkDelete deleteTask={deleteTask} tasks={tasks} />}
        />
        <Route path="/:any" element={<h1>The requested route not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
