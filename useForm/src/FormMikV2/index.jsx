import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormMikV2 = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(20, "Must be  20 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(10, "Must be  10 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form
          className="container-form p-10 w-full max-w-[500px] mx-auto"
          autoComplete="off"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="cursor-pointer">
              Username
            </label>
            <Field
              name="firstName"
              type="text"
              className="p-4 rounded-md border border-gray-100 mb-4"
              id="firstName"
              placeholder="Enter Your firstName"
            ></Field>
            <div className="text-red-500 text-sm mb-4">
              <ErrorMessage name="firstName"></ErrorMessage>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="cursor-pointer mt-4">
              Last Name
            </label>
            <Field
              name="lastName"
              type="text"
              className="p-4 rounded-md border border-gray-100 mb-4"
              id="lastName"
              placeholder="Enter Your lastName"
            ></Field>
            <div className="text-red-500 text-sm mb-4">
              <ErrorMessage name="lastName"></ErrorMessage>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mx-auto max-w-[100px] text-center p-3 border bg-blue-500 text-white rounded-lg border-blue-500 mt-4"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default FormMikV2;
