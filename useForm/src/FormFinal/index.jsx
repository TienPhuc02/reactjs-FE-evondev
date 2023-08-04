import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const FormFinal = () => {
  return (
    <div className="bg-slate-300 h-auto font-medium">
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
          email: Yup.string().email().required("Required"),
          intro: Yup.string().required("Required"),
          terms: Yup.boolean().oneOf(
            [true],
            "Please accept the terms and conditions"
          ),
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            actions.resetForm({
              firstName: "",
              lastName: "",
              email: "",
              intro: "",
              job: "",
              terms: false,
            });
            actions.setSubmitting(false);
          }, 5000);
        }}
      >
        {(formik) => {
          console.log(formik);
          return (
            <Form
              className="container-form p-10 w-full max-w-[500px] mx-auto"
              autoComplete="off"
            >
              <MyInput
                label="firstName"
                name="firstName"
                placeholder="Enter Your firstName"
                id="firstName"
              />
              <MyInput
                label="lastName"
                name="lastName"
                placeholder="Enter Your lastName"
                id="lastName"
              />
              <MyInput
                label="Email"
                name="email"
                placeholder="Enter Your email"
                id="email"
              />
              <MyInput
                label="Intro"
                name="intro"
                placeholder="Enter Your intro"
                id="intro"
                className="p-4 rounded-md border bg-white border-gray-100 mb-4 max-h-[150px] pb-[100px] "
              />
              <MyInput
                label="Your Job"
                name="job"
                placeholder="Enter Your job"
                id="job"
                type="select"
                as="select"
              >
                <option value="frontend">FrontEnd Developer</option>
                <option value="backend">BackEnd Developer</option>
                <option value="fullstack">BackEnd Developer</option>
              </MyInput>
              <div className="flex  items-start gap-2">
                <label htmlFor="intro" className="cursor-pointer mt-4"></label>
                <Field
                  name="terms"
                  type="checkbox"
                  className="p-4  rounded-md border border-gray-100 mb-4 pr-2 block  bg-white"
                  id="terms"
                ></Field>
                <span>I accept the terms and conditions</span>
              </div>
              <div className="text-red-500 text-sm mb-4">
                <ErrorMessage name="terms"></ErrorMessage>
              </div>
              <button
                type="submit"
                className="w-full mx-auto  text-center p-3 border bg-blue-500 text-white rounded-lg border-blue-500 mt-4"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
const MyInput = (props) => {
  const [field, meta] = useField(props);
  //   console.log(field);
  if (props.as === "select") {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={props.id || props.name}>{props.label}</label>
        <select
          className={
            props.className
              ? props.className
              : "p-4 rounded-md border border-gray-100 mb-4 bg-white"
          }
          placeholder={props.placeholder}
          id={props.id}
          {...field}
        >
          {props.children}
        </select>
        {meta.touched && meta.error ? (
          <div className="text-sm text-red-500 mb-4">
            <div name={props.name}>{meta.error}</div>
          </div>
        ) : null}
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input
        type={props.type}
        className={
          props.className
            ? props.className
            : "p-4 rounded-md border border-gray-100 mb-4 bg-white"
        }
        placeholder={props.placeholder}
        id={props.id}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500 mb-4">
          <div name={props.name}>{meta.error}</div>
        </div>
      ) : null}
    </div>
  );
};
MyInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  as: PropTypes.oneOf(["input", "select"]),
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.node,
};
export default FormFinal;
