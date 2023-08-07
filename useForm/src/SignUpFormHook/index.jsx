import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yub from "yup";
import { useEffect } from "react";
const schemaValidation = Yub.object({
  firstName: Yub.string()
    .required("Please fill on this field")
    .max(5, "Must be 10 character or less"),
});
const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState,
    watch,
    reset,
    resetField,
    setFocus,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  const watchShowAge = watch("showAge", false);
  console.log(
    "🚀 ~ file: index.jsx:15 ~ SignUpFormHook ~ watchShowAge:",
    watchShowAge
  );
  const { isSubmitting, errors } = formState;

  const onSubmit = async (values) => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
    });
    console.log("🚀 ~ file: index.jsx:33 ~ onSubmit ~ values:", values);
    resetField("firstName");
  };
  const demoFields = () => {
    setValue("firstName", "phuc");
    setValue("lastName", "phuc");
    setValue("email", "phuc@gmail.com");
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container-form p-10 w-full max-w-[500px] mx-auto"
        autoComplete="off"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="cursor-pointer">
            First Name
          </label>
          <input
            type="text"
            {...register("firstName")}
            name="firstName"
            className="p-4 rounded-md border border-gray-100 mb-4"
            id="firstName"
            placeholder="Enter Your firstName"
          />
          {errors?.firstName?.type === "max" && (
            <div className="text-red-500 text-sm mb-3">
              {errors?.firstName?.message}
            </div>
          )}
          {errors?.firstName?.type === "required" && (
            <div className="text-red-500 text-sm mb-3">
              {errors?.firstName?.message}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="cursor-pointer">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="p-4 rounded-md border border-gray-100 mb-4"
            id="lastName"
            {...register("lastName")}
            placeholder="Enter Your lastName"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="cursor-pointer">
            Email
          </label>
          <MyInput
            control={control}
            name={"email"}
            placeholder="Enter Your email"
            id={"email"}
          />
          {/* <input
            type="text"
            name="email"
            className="p-4 rounded-md border border-gray-100 mb-4"
            id="email"
            {...register("email")}
            placeholder="Enter Your email"
          /> */}
          <div className="flex items-start mb-2 flex-col gap-2">
            <input type="checkbox" name="" id="" {...register("showAge")} />
            {watchShowAge && (
              <input
                type="number"
                name=""
                placeholder="Please enter your age"
                id=""
              />
            )}
          </div>
        </div>
        <button
          className="w-full mx-auto max-w-[200px] text-center p-3 border bg-blue-500 text-white rounded-lg border-blue-500"
          disabled={isSubmitting}
          // type="submit"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-4 mx-auto border-white rounded-full animate-spin border-t-transparent"></div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <div className="max-w-[500px] mx-auto pl-10">
        <button
          onClick={demoFields}
          className="w-full mx-auto max-w-[200px] text-center p-3 border bg-green-500 text-white rounded-lg border-green-500"
        >
          Demo Fields
        </button>
      </div>
    </>
  );
};
const MyInput = ({ control, ...props }) => {
  return (
    <Controller
      control={control}
      name={props.name}
      defaultValue={""}
      render={({ field }) => {
        return (
          <input
            className="p-4 rounded-md border border-gray-100 mb-4"
            {...field}
            {...props}
          />
        );
      }}
    />
  );
};
export default SignUpFormHook;
