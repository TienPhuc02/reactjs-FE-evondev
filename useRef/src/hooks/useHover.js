import React, { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const handleHoverOver = () => {
      setHovered(true);
    };
    const handleHoverOut = () => {
      setHovered(false);
    };
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleHoverOver);
      dom.addEventListener("mouseout", handleHoverOut);
    }
    return () => {
      dom.removeEventListener("mouseout", handleHoverOut);
      dom.removeEventListener("mouseover", handleHoverOver);
    };
  }, []);
  return {
    nodeRef,
    hovered,
  };
}
