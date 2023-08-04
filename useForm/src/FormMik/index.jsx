import { useFormik } from "formik";
const FormMik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  //   console.log(formik);
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="container-form p-10 w-full max-w-[500px] mx-auto"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="cursor-pointer">
            Username
          </label>
          <input
            type="text"
            name="firstName"
            className="p-4 rounded-md border border-gray-100"
            id="firstName"
            placeholder="Enter Your firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </div>
        <button className="w-full mx-auto max-w-[100px] text-center p-3 border bg-blue-500 text-white rounded-lg border-blue-500">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormMik;
