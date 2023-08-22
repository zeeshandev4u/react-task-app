import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Task {
  id: number;
  name: string;
}
interface CreateTaskProps {
  createTask: (task: Task) => void;
  tasks: Task[];
}

const CreateTask: React.FC<CreateTaskProps> = ({ createTask, tasks }) => {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleCreateTask = () => {
    if (taskName.trim() === "") {
      return;
    }
    createTask({ id: tasks.length, name: taskName });
    setTaskName("");
    navigate("/list-tasks");
  };

  return (
    <StyledCreateTask>
      <h2>Create Task</h2>
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      {taskName ? (
        <button onClick={handleCreateTask}>Create Task</button>
      ) : null}
    </StyledCreateTask>
  );
};

export default CreateTask;

const StyledCreateTask = styled.div`
  width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  input {
    width: 85%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button {
    width: 100px;
    height: 40px;
    background-color: #51c541;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;
