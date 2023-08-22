import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GreenButton, RedButton, BlueButton } from "./Home";

interface Task {
  id: number;
  name: string;
}

interface ListTasksProps {
  tasks: Task[];
}

const ListTasks: React.FC<ListTasksProps> = ({ tasks }) => {
  const navigate = useNavigate();

  return (
    <StyledListTasks>
      <h1>Task List</h1>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <StyledTaskList>
          {tasks.map((task) => (
            <StyledTaskCard key={task.id}>
              <h3>{task.name}</h3>
            </StyledTaskCard>
          ))}
        </StyledTaskList>
      )}
      <GreenButton onClick={() => navigate("/create-task")}>
        Add Task
      </GreenButton>
      {tasks.length ? (
        <RedButton onClick={() => navigate("/bulk-delete")}>
          Delete Tasks
        </RedButton>
      ) : null}
      <BlueButton onClick={() => navigate("/")}> Home Page</BlueButton>
    </StyledListTasks>
  );
};

export default ListTasks;

const StyledListTasks = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
  }
`;

const TaskList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TaskCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  width: 200px;
`;

const StyledTaskList = styled(TaskList)`
  background-color: #fff;
  padding: 20px;
`;

const StyledTaskCard = styled(TaskCard)`
  background-color: #ffffff;
  color: #333;
`;
