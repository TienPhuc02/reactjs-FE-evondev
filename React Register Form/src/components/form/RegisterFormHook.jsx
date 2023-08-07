import styled from "styled-components";
import { useForm } from "react-hook-form";
const RegisterFormHook = () => {
  const FormHookStyle = styled.div`
    max-width: 300px;
    margin: 0 auto;
    .field-username {
      display: flex;
      flex-direction: column;
      label {
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 10px;
      }
      input {
        padding: 14px 15px 15px;
        border-radius: 10px;
        border: none;
        margin-bottom: 10px;
        background-color: white;
        &:focus {
          outline: none !important;
          border: 1px solid #2979ff;
          transition: all;
        }
      }
      span {
        font-weight: 400;
        font-size: 12px;
        color: #e74c3c;
      }
    }
  `;
  return (
    <FormHookStyle>
      <div className="field-username">
        <label htmlFor="Username">Username</label>
        <input type="text" id="Username" placeholder="Enter Your Username" />
        <span>Please enter your username</span>
      </div>
    </FormHookStyle>
  );
};

export default RegisterFormHook;
