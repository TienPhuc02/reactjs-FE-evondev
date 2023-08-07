import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputHook from "../Input/InputHook";
const FormHookStyle = styled.form`
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
const RegisterFormHook = () => {
  const { control, handleSubmit, formState } = useForm();
  const onSubmitHandler = (values) => {
    console.log(
      "🚀 ~ file: RegisterFormHook.jsx:37 ~ onSubmit ~ values:",
      values
    );
  };
  return (
    <FormHookStyle onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="field-username">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          control={control}
          name={"username"}
          placeholder="Enter Your userName"
          id={"username"}
        />
        <span>Please enter your username</span>
      </div>
      <button
        type="submit"
        className="button mt-2 h-[50px] flex items-center justify-center rounded-[10px] w-full border bg-blue-500 text-white font-bold text-[16px] cursor-pointer "
      >
        Submit
      </button>
    </FormHookStyle>
  );
};

export default RegisterFormHook;
