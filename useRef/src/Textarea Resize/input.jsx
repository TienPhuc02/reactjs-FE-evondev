import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("demo");

  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const handleChange = (e) => {
    // console.log(e.target.value);
    setTextareaHeight("auto");
    setText(e.target.value);
  };
  useLayoutEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);

    console.log("do something");
  }, [text]);
  return (
    <div
      className="p-5"
      style={{
        minHeight: parentHeight,
      }}
    >
      <textarea
        type="text"
        value={text}
        className="border border-gray-200  rounded-lg p-2 w-full max-w-[200px]  transition-all overflow-hidden focus:border-blue-400 resize-none"
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextareaAutoResize;
