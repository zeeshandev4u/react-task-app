import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <StyledHome>
      <h1>Tasks Home page</h1>
      <p>Add your daily routine task as a reminder.</p>
      <GreenButton
        onClick={() => navigate("/create-task")}
        className="buttons-aligment"
      >
        Add Task
      </GreenButton>
      <BlueButton onClick={() => navigate("/list-tasks")}>
        Go to tasks
      </BlueButton>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
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

const StyledButton = styled.button`
  margin: 20px;
  width: 100px;
  height: 40px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

const BlueButton = styled(StyledButton)`
  background-color: #007bff;
`;

const GreenButton = styled(StyledButton)`
  background-color: #51c541;
`;
const RedButton = styled(StyledButton)`
  background-color: #e63535;
`;

export { BlueButton, GreenButton, RedButton };
export default Home;
