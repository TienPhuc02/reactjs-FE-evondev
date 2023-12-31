import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useEffect, useState } from "react";
const DropdownHook = ({ control, setValue, name, dropDownLabel, data }) => {
  const [label, setLabel] = useState(dropDownLabel);
  const { show, setShow, nodeRef } = useClickOutSide();
  useWatch({
    control,
    name: "job",
    defaultValue: "",
  });
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  useEffect(() => {
    if (dropDownLabel) setLabel(dropDownLabel);
  }, [dropDownLabel]);
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
        {data.length > 0 &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <div
                  className="p-5 cursor-pointer hover:bg-gray-100"
                  onClick={handleClickDropdownItem}
                  data-value={item.value}
                >
                  {item.text}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DropdownHook;
