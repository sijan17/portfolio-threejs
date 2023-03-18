import React from "react";

const LetterHoverEffect = ({ text, color, currentColor = "white" }) => {
  const [hovered, setHovered] = React.useState(false);

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  const textChars = text.split("");
  const coloredChars = textChars.map((char, index) => {
    const style = {
      color: hovered ? color : currentColor,
      transition: `color 0.2s ease-out ${index * 0.05}s`,
    };

    return (
      <span key={index} style={style}>
        {char}
      </span>
    );
  });

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {coloredChars}
    </div>
  );
};

export default LetterHoverEffect;
