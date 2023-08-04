import { useFormik } from "formik";
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 20) {
    errors.firstName = "Must be  20 characters or less";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be  20 characters or less";
  }
  return errors;
};
const FormMik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="container-form p-10 w-full max-w-[500px] mx-auto"
        autoComplete="off"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="cursor-pointer">
            Username
          </label>
          <input
            type="text"
            name="firstName"
            className="p-4 rounded-md border border-gray-100 mb-4"
            id="firstName"
            placeholder="Enter Your firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          {formik.errors.firstName ? (
            <div className="text-sm text-red-500">
              {formik.errors.firstName}
            </div>
          ) : null}
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
            placeholder="Enter Your lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          {formik.errors.lastName ? (
            <div className="text-sm text-red-500">{formik.errors.lastName}</div>
          ) : null}
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

export default FormMik;
