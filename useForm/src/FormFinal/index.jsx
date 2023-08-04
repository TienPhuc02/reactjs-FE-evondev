import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormFinal = () => {
  return (
    <div className="bg-slate-300 h-auto">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          intro: "",
          job: "",
          terms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          email: Yup.string().required("Required"),
          intro: Yup.string().required("Required"),
          terms: Yup.boolean(),
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
              className="p-4 rounded-md border border-gray-100 mb-4 bg-white"
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
              className="p-4 rounded-md border border-gray-100 mb-4 bg-white"
              id="lastName"
              placeholder="Enter Your lastName"
            ></Field>
            <div className="text-red-500 text-sm mb-4">
              <ErrorMessage name="lastName"></ErrorMessage>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="cursor-pointer mt-4">
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="p-4 rounded-md border border-gray-100 mb-4 bg-white"
              id="email"
              placeholder="Enter Your Email"
            ></Field>
            <div className="text-red-500 text-sm mb-4">
              <ErrorMessage name="email"></ErrorMessage>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="intro" className="cursor-pointer mt-4">
              Intro
            </label>
            <Field
              name="intro"
              type="text"
              className="p-4 rounded-md border border-gray-100 mb-4 max-h-[150px] pb-[100px]  bg-white"
              id="intro"
              placeholder="Introduce yourself..."
            ></Field>
            <div className="text-red-500 text-sm mb-4">
              <ErrorMessage name="intro"></ErrorMessage>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="intro" className="cursor-pointer mt-4">
              Intro
            </label>
            <Field
              name="job"
              type="select"
              className="p-4 rounded-md border border-gray-100 mb-4 pr-2  bg-white"
              id="intro"
              as="select"
            >
              <option value="frontend">FrontEnd Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">FullStack Developer</option>
            </Field>
            <div className="text-red-500 text-sm mb-4">
              <ErrorMessage name="intro"></ErrorMessage>
            </div>
          </div>
          <div className="flex  items-start gap-2">
            <label htmlFor="intro" className="cursor-pointer mt-4"></label>
            <Field
              name="terms"
              type="checkbox"
              className="p-4  rounded-md border border-gray-100 mb-4 pr-2 block  bg-white"
              id="terms"
            ></Field>
            <span>I accept the terms and conditions</span>
            <div className="text-red-500 text-sm mb-4">
              <ErrorMessage name="intro"></ErrorMessage>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mx-auto  text-center p-3 border bg-blue-500 text-white rounded-lg border-blue-500 mt-4"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormFinal;
