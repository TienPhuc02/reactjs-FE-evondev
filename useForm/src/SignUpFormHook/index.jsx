import { useForm } from "react-hook-form";
const SignUpFormHook = () => {
  const { register, handleSubmit } = useForm();
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
            defaultValue={"phuc"}
            {...register("firstName")}
            name="firstName"
            className="p-4 rounded-md border border-gray-100 mb-4"
            id="firstName"
            placeholder="Enter Your firstName"
          />
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
