import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  });
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        className="w-[200px] h-[50px] border-gray-200 border inline-block p-5 m-2 focus:border-blue-300"
        placeholder="focus input"
      />
    </div>
  );
};

export default Input;
