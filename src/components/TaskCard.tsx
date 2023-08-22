import React from "react";
import styled from "styled-components";

interface TaskCardProps {
  taskName: string;
  checked: boolean;
  onCheckboxChange: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  taskName,
  checked,
  onCheckboxChange,
}) => {
  return (
    <CardContainer>
      <TaskName>{taskName}</TaskName>
      <label>
        <Checkbox
          type="checkbox"
          checked={checked}
          onChange={onCheckboxChange}
        />
      </label>
    </CardContainer>
  );
};

export default TaskCard;

const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TaskName = styled.span`
  font-size: 18px;
  color: #333333;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;
