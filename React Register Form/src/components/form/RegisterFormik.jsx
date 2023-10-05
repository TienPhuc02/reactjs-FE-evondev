const RegisterFormik = () => {
  return (
    <div>
      <form>
        <div className="input-formik flex flex-col">
          <label
            className="font-[Poppins,san-serif] font-medium text-[14px] leading-[21px] bt-[10px]"
            htmlFor="username"
          >
            Username
          </label>
          <input
            placeholder="Enter your username"
            id="username"
            name="username"
            type="text"
            className="w-full mb-[10px] p-[15px] rounded-[10px] max-w-[300px]  focus:border-blue-500 bg-white border "
          />
          <span className="font-[Poppins,san-serif] text-[#E74C3C] mb-[10px] leading-[18px] font-normal text-[12px]">
            Please enter your username
          </span>
        </div>
        <div className="input-formik flex flex-col">
          <label
            className="font-[Poppins,san-serif] font-medium text-[14px] leading-[21px] bt-[10px]"
            htmlFor="password"
          >
            Password
          </label>
          <input
            placeholder="Enter your password"
            id="password"
            name="password"
            type="text"
            className="w-full mb-[10px] p-[15px] rounded-[10px] max-w-[300px]  focus:border-blue-500 bg-white border "
          />
          <span className="font-[Poppins,san-serif] text-[#E74C3C] mb-[10px] leading-[18px] font-normal text-[12px]">
            Please enter your password
          </span>
        </div>
        <div className="input-formik flex flex-col">
          <label
            className="font-[Poppins,san-serif] font-medium text-[14px] leading-[21px] bt-[10px]"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            placeholder="Enter your email"
            id="email"
            name="email"
            type="text"
            className="w-full mb-[10px] p-[15px] rounded-[10px] max-w-[300px]  focus:border-blue-500 bg-white border "
          />
          <span className="font-[Poppins,san-serif] text-[#E74C3C] mb-[15px] leading-[18px] font-normal text-[12px]">
            Please enter your email
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterFormik;
