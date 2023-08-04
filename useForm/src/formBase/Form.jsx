import useHandleChange from "../hooks/useHandleChange";

const Form = () => {
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  console.log(values);
  return (
    <div className="p-5 flex justify-center items-center gap-x-10">
      <input
        onChange={handleChange}
        type="text"
        className="border rounded-lg focus:border-blue-300 border-gray-200 p-5 max-w-[400px] w-full "
        placeholder="Enter Your Name"
        name="fullname"
      />
      <input
        onChange={handleChange}
        type="email"
        className="border rounded-lg focus:border-blue-300 border-gray-200 p-5 max-w-[400px] w-full "
        placeholder="Enter Your Email"
        name="email"
      />
      <input type="checkbox" name="hobby" onChange={handleChange} />
    </div>
  );
};

export default Form;
