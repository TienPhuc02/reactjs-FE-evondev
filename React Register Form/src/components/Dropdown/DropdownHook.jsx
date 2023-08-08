import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useState } from "react";
const DropdownHook = ({ control, setValue, name, ...props }) => {
  const [label, setLabel] = useState("Select your job");
  const { show, setShow, nodeRef } = useClickOutSide();
  const jobValue = useWatch({
    control,
    name: "job",
    defaultValue: "", 
  });
  console.log(
    "🚀 ~ file: DropdownHook.jsx:9 ~ DropdownHook ~ jobValue:",
    jobValue
  );
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 round-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer rounded-lg"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full  w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value={"Teacher"}
        >
          Teacher
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value={"Developer"}
        >
          Developer
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value={"Doctor"}
        >
          Doctor
        </div>
      </div>
    </div>
  );
};

export default DropdownHook;
