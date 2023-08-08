import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputHook from "../Input/InputHook";
import RadioHook from "../Radio/RadioHook";
import CheckBoxHook from "../CheckBox/CheckBoxHook";
import DropdownHook from "../Dropdown/DropdownHook";
const FormHookStyle = styled.form`
  max-width: 300px;
  margin: 0 auto;
  .field {
    display: flex;
    flex-direction: column;
    label {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 10px;
      margin-top: 20px;
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
    .errors {
      font-weight: 400;
      font-size: 12px;
      color: #e74c3c;
    }
  }
`;
const RegisterFormHook = () => {
  const { control, handleSubmit, formStaten, setValue } = useForm();
  const dropdownData = [
    {
      id: 1,
      value: "Teacher",
      text: "Teacher",
    },
    {
      id: 2,
      value: "Developer",
      text: "Developer",
    },
    {
      id: 3,
      value: "Doctor",
      text: "Doctor",
    },
  ];
  const onSubmitHandler = (values) => {
    console.log(
      "🚀 ~ file: RegisterFormHook.jsx:37 ~ onSubmit ~ values:",
      values
    );
  };
  return (
    <FormHookStyle onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="field">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          control={control}
          name={"username"}
          placeholder="Enter Your userName"
          id={"username"}
          type="text"
        />
        <span className="errors">Please enter your username</span>
      </div>
      <div className="field">
        <label htmlFor="email" className="cursor-pointer">
          Email Address
        </label>
        <InputHook
          control={control}
          name={"email"}
          placeholder="Enter Your email"
          id={"email"}
          type="email"
        />
      </div>
      <div className="field">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          control={control}
          name={"password"}
          placeholder="Enter Your password"
          id={"password"}
          type="password"
        />
      </div>
      <div className="field">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <RadioHook value="male" name="gender" control={control} />
            <span className="font-normal text-[#999] text-[14px]">Male</span>
          </div>
          <div className="flex items-center gap-3">
            <RadioHook value="female" name="gender" control={control} />
            <span className="font-normal text-[#999] text-[14px]">Female</span>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="cursor-pointer">You are</label>
        <DropdownHook
          data={dropdownData}
          control={control}
          dropDownLabel="Please Select"
          setValue={setValue}
          name="job"
        />
      </div>
      <div className="field">
        <label className="cursor-pointer">Gender</label>
        <CheckBoxHook
          control={control}
          name="term"
          value="term"
          id="term"
          text={"I accept the terms and conditions"}
        />
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
