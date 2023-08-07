import { useController } from "react-hook-form";

const CheckBoxHook = ({ control, text, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <label className="cursor-pointer custom-checkbox">
      <input type="checkbox" {...field} {...props} className="hidden" />
      <div className="flex items-center gap-x-3">
        <div className="bg-white transition-all h-full rounded-md flex justify-center items-center max-w-[20px] w-full mr-[10px] custom-checkbox-square">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7453 4.89733L5.93178 12.7109L2.25482 9.03391L3.17132 8.11741L5.93178 10.8714L12.8288 3.98083L13.7453 4.89733Z"
              fill="white"
            />
          </svg>
        </div>
        <label
          className="text-[#999] text-[14px] cursor-pointer"
          htmlFor={props.name}
        >
          {text}
        </label>
      </div>
    </label>
  );
};

export default CheckBoxHook;
