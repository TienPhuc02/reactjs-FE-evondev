import { counterStore } from "../store/counter-store";

const Counter = () => {
  const { count, increment, decrement } = counterStore((state) => state);
  console.log(count, increment);
  return (
    <div className=" pt-10 container max-w-[1000px] mx-auto flex justify-center  gap-4">
      <div className="p-2 border border-blue-500 rounded-lg w-[50px] flex justify-center items-center font-medium">
        <button onClick={decrement} className="font-medium">
          -
        </button>
      </div>
      <span className="text-center flex justify-center items-center font-medium">
        {count}
      </span>
      <div className="p-2 border border-blue-500 rounded-lg w-[50px] flex justify-center items-center font-medium">
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
