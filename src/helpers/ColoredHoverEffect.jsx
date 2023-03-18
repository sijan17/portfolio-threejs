import React, { useState } from "react";

const ColoredHoverEffect = ({ color, children }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const gradient = hovered
    ? `linear-gradient(to right, ${color} 50%, transparent 50%)`
    : "none";

  const style = {
    backgroundImage: gradient,
    transition: "background-image 0.5s ease-in-out",
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {children}
    </div>
  );
};

export default ColoredHoverEffect;
