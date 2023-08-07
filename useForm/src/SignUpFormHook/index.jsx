import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yub from "yup";
const schemaValidation = Yub.object({
  firstName: Yub.string()
    .required("Please fill on this field")
    .max(5, "Must be 10 character or less"),
});
const SignUpFormHook = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  const { isSubmitting, errors } = formState;
  console.log(
    "🚀 ~ file: index.jsx:14 ~ SignUpFormHook ~ isSubmitting:",
    isSubmitting
  );
  function onSubmit() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  }

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
          className="w-full mx-auto max-w-[200px] text-center p-3 border bg-blue-500 text-white rounded-lg border-blue-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="w-10 h-10 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </>
  );
};

export default SignUpFormHook;
