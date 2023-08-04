import { useState } from "react";

const Form2 = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    hobby: false,
  });
  const handleChangeInput = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  console.log(values);
  return (
    <div className="p-5 flex justify-center items-center gap-x-10">
      <input
        onChange={handleChangeInput}
        type="text"
        className="border rounded-lg focus:border-blue-300 border-gray-200 p-5 max-w-[400px] w-full "
        placeholder="Enter Your Name"
        name="fullname"
      />
      <input
        onChange={handleChangeInput}
        type="email"
        className="border rounded-lg focus:border-blue-300 border-gray-200 p-5 max-w-[400px] w-full "
        placeholder="Enter Your Email"
        name="email"
      />
      <input type="checkbox" name="hobby" onChange={handleChangeInput} />
      {/* {message}
      <textarea
        name="message"
        type="text"
        className="border rounded-lg focus:border-blue-300 border-gray-200 p-5 max-w-[400px] w-full "
        placeholder="Enter Your Name"
        onChange={handleChangeTextarea}
      ></textarea>
      <select name="country" onChange={(e) => handleSelectChange(e)}>
        <option value="VietNam">VietNam</option>
        <option value="USA">USA</option>
        <option value="Japan">Japan</option>
      </select> */}
    </div>
  );
};

export default Form2;
