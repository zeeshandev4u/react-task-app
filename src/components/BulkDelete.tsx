import { useState } from "react";
import styled from "styled-components";
import TaskCard from "./TaskCard";
import { BlueButton, RedButton } from "./Home";
import { useNavigate } from "react-router-dom";

interface Task {
  id: number;
  name: string;
}

interface ListTasksProps {
  deleteTask: (selectedTasks: Task[]) => void;
  tasks: Task[];
}

const BulkDelete: React.FC<ListTasksProps> = ({ deleteTask, tasks }) => {
  const navigate = useNavigate();
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([]);

  const handleCheckboxChange = (task: Task) => {
    if (selectedTasks.some((e) => e.id === task.id)) {
      setSelectedTasks(
        selectedTasks.filter((selectedTask) => selectedTask.id !== task.id)
      );
    } else {
      setSelectedTasks([...selectedTasks, task]);
    }
  };

  const handleDeleteSelected = () => {
    deleteTask(selectedTasks);
    setSelectedTasks([]);
  };

  return (
    <StyledBulkDelete>
      <h1>Bulk Delete</h1>
      {tasks.length === 0 ? (
        <p>No tasks Exist</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            taskName={task.name}
            checked={selectedTasks.some((e) => e.id === task.id)}
            onCheckboxChange={() => handleCheckboxChange(task)}
          />
        ))
      )}
      <RedButton
        onClick={handleDeleteSelected}
        disabled={selectedTasks.length === 0}
        style={{
          cursor: selectedTasks.length === 0 ? "default" : "pointer",
          opacity: selectedTasks.length === 0 ? 0.5 : 1,
        }}
      >
        Delete
      </RedButton>
      <BlueButton onClick={() => navigate("/list-tasks")}>
        Go to Tasks
      </BlueButton>
    </StyledBulkDelete>
  );
};

export default BulkDelete;

const StyledBulkDelete = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  div {
    width: 50%;
    margin-bottom: 10px;
  }

  input {
    margin-right: 10px;
  }

  span {
    font-size: 16px;
  }
`;
