import React, { useState } from "react";

const MovableText = (props) => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (e) => {
    setOffsetX(e.nativeEvent.offsetX);
    setOffsetY(e.nativeEvent.offsetY);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setOffsetX(0);
      setOffsetY(0);
    }, 200);
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${props.style} transform ease-out duration-300`}
      style={{ transform: `translate(${offsetX / 10}px, ${offsetY / 10}px)` }}
    >
      {props.text}
    </div>
  );
};

export default MovableText;
