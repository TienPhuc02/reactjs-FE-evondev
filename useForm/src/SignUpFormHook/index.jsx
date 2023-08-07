import { useForm } from "react-hook-form";
const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("🚀 ~ file: index.jsx:4 ~ SignUpFormHook ~ errors:", errors);
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container-form p-10 w-full max-w-[500px] mx-auto"
        autoComplete="off"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="cursor-pointer">
            Username
          </label>
          <input
            type="text"
            {...register("firstName", {
              required: true,
              maxLength: 10,
              minLength: 2,
              // pattern regex
            })}
            name="firstName"
            className="p-4 rounded-md border border-gray-100 mb-4"
            id="firstName"
            placeholder="Enter Your firstName"
          />
          {errors?.firstName?.type === "required" && (
            <div className="text-red-500 text-sm mb-3">
              Must be 10 character or less
            </div>
          )}
          {errors?.firstName?.type === "maxLength" && (
            <div className="text-red-500 text-sm mb-3">
              Please fill on this field
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
          <input
            type="text"
            name="email"
            className="p-4 rounded-md border border-gray-100 mb-4"
            id="email"
            {...register("email")}
            placeholder="Enter Your email"
          />
        </div>
        <button
          type="submit"
          className="w-full mx-auto max-w-[100px] text-center p-3 border bg-blue-500 text-white rounded-lg border-blue-500"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUpFormHook;
