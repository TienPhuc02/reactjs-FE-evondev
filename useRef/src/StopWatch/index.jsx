import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const handleStart = () => {
    // console.log("abc");
    countRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    // console.log(countRef.current);
  };
  const handleStop = () => {
    // console.log("def");
    clearInterval(countRef.current);
    countRef.current = null;
  };
  useEffect(() => {
    //side effect
    return () => {
      clearInterval(countRef.current);
    };
  }, []);
  return (
    <div>
      <span>Time : {count}s</span>
      <div>
        <div className="mr-1 cursor-pointer" onClick={handleStart}>
          Start
        </div>
        <div className="cursor-pointer" onClick={handleStop}>
          Stop
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
