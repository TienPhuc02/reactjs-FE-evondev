import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputHook from "../Input/InputHook";
import RadioHook from "../Radio/RadioHook";
import CheckBoxHook from "../CheckBox/CheckBoxHook";
import DropdownHook from "../Dropdown/DropdownHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
const schema = yup
  .object({
    username: yup
      .string()
      .required("Please Enter Your UserName")
      .max(20, "20 characters is max"),
    email: yup
      .string()
      .email("Please Enter Your Email Address")
      .required("Please Enter Your Email Address"),
    password: yup
      .string()
      .min(8, "Your Password must be at least 8 characters or greater")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Your password must have 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
        }
      )
      .required("Please Enter Your PassWord"),
    gender: yup.string().required("Please Enter Your Gender"),
    job: yup.string().required("Please Enter Your Job"),
    term: yup.boolean().required("Please Enter Your Job"),
  })
  .required();
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
const RegisterFormHook = () => {
  const { control, handleSubmit, formState, setValue, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { errors, isValid, isSubmitting, isSubmitSuccessful } = formState;
  console.log(
    "🚀 ~ file: RegisterFormHook.jsx:89 ~ RegisterFormHook ~ isSubmitting:",
    isSubmitting
  );
  console.log(
    "🚀 ~ file: RegisterFormHook.jsx:50 ~ RegisterFormHook ~ errors:",
    errors
  );

  const onSubmitHandler = (values) => {
    if (isValid) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(
            "🚀 ~ file: RegisterFormHook.jsx:37 ~ onSubmit ~ values:",
            values
          );
          resolve();
          reset({
            username: "",
            email: "",
            password: "",
            gender: "",
            job: "", // Reset the dropdown value
            term: false, // Reset the checkbox value
          });
        }, 3000);
      });
    }
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
        <span className="errors">{errors?.username?.message}</span>
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
        <span className="errors">{errors?.email?.message}</span>
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
        <span className="errors leading-4">{errors?.password?.message}</span>
      </div>
      <div className="field">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <RadioHook
              value="male"
              name="gender"
              control={control}
              
            />
            <span className="font-normal text-[#999] text-[14px]">Male</span>
          </div>
          <div className="flex items-center gap-3">
            <RadioHook value="female" name="gender" control={control} />
            <span className="font-normal text-[#999] text-[14px]">Female</span>
          </div>
        </div>
        <span className="errors leading-4">{errors?.gender?.message}</span>
      </div>
      <div className="field">
        <label htmlFor="job" className="cursor-pointer">
          You are
        </label>
        <DropdownHook
          data={dropdownData}
          control={control}
          dropDownLabel={
            isSubmitSuccessful ? "Please Select " : "Please Select"
          }
          setValue={setValue}
          name="job"
          id="job"
        />
        <span className="errors leading-4">{errors?.job?.message}</span>
      </div>
      <div className="field">
        <label htmlFor="term" className="cursor-pointer">
          Validation
        </label>
        <CheckBoxHook
          control={control}
          name="term"
          value="term"
          id="term"
          text={"I accept the terms and conditions"}
        />
        <span className="errors leading-4">{errors?.term?.message}</span>
      </div>
      {isSubmitting ? (
        <button
          type="submit"
          className="button mt-2 h-[50px] flex items-center justify-center rounded-[10px] w-full border bg-blue-500 opacity-40 text-white font-bold text-[16px] cursor-pointer "
        >
          <div className="w-5 h-5 border-4 border-white-500 rounded-full animate-spin border-t-transparent bg-blue-500 "></div>
        </button>
      ) : (
        <button
          type="submit"
          className="button mt-2 h-[50px] flex items-center justify-center rounded-[10px] w-full border bg-blue-500 text-white font-bold text-[16px] cursor-pointer "
        >
          Submit
        </button>
      )}
    </FormHookStyle>
  );
};

export default RegisterFormHook;
