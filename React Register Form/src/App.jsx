import RegisterFormHook from "./components/form/RegisterFormHook";
import RegisterFormik from "./components/form/RegisterFormik";
import styled from "styled-components";
const AppStyle = styled.div`
  width: 100%;
  padding: 20px;
  max-width: 500px;
  background-color: #e5e5e5;
  margin: 0 auto;
  h1 {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 600px;
    font-size: 48px;
    color: #000;
    margin-bottom: 40px;
  }
`;
const App = () => {
  return (
    <AppStyle>
      <h1>Register Form</h1>
      <RegisterFormHook />
      {/* <RegisterFormik/> */}
    </AppStyle>
  );
};

export default App;
