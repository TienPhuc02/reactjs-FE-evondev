import { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const dropdownRef = useRef(null);
  const [stateDropdown, setSateDropdown] = useState(false);
  const handleClickDropdown = () => {
    setSateDropdown(!stateDropdown);
  };
  console.log(stateDropdown);
  const handleClickOut = (e) => {
    console.log(dropdownRef.current);
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setSateDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);
  return (
    <div ref={dropdownRef} className="dropdown-container ml-2 w-[400px] mt-3 ">
      <div
        onClick={(e) => handleClickDropdown(e)}
        className="selected border border-gray-400 focus:border-blue-400 cursor-pointer w-full  p-5 rounded-lg  "
      >
        <span>Selected</span>
      </div>
      <div
        className={`content transition flex flex-col ${
          stateDropdown ? "" : "hidden"
        }`}
      >
        <div className="p-5 border border-gray-00  rounded-lg   w-full">
          NextJS
        </div>
        <div className="p-5 border border-gray-200  rounded-lg   w-full">
          ReactJS
        </div>
        <div className="p-5 border border-gray-200 rounded-lg   w-full">
          ViteJS
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
