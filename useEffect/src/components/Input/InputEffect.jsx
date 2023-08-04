import { useEffect, useState } from "react";

const InputEffect = () => {
  const [message, setMessage] = useState("Phuc");
  useEffect(() => {
    const res = setTimeout(() => {
      console.log(message);
    }, 1000);
    return () => {
      clearTimeout(res);
    };
  }, [message]);
  return (
    <div>
      <input
        className="cursor-pointer"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default InputEffect;
