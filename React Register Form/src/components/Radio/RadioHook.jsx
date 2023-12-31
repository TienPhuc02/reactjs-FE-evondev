import { useController } from "react-hook-form";

const RadioHook = ({ control, defaultChecked, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <label className="cursor-pointer custom-radio">
      <input
        checked={defaultChecked}
        type="radio"
        {...field}
        {...props}
        className="hidden"
      />
      <div className="bg-white h-full rounded-full w-full"></div>
    </label>
  );
};

export default RadioHook;
