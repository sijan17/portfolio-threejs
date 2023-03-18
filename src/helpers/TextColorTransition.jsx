import React, { useEffect, useRef, useState } from "react";

const TextColorTransition = ({
  initialColor = "white",
  finalColor = "purple",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        textRef.current &&
        window.innerHeight > textRef.current.getBoundingClientRect().top
      ) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderLetters = () => {
    const letters = children.split("");

    return letters.map((letter, index) => (
      <span
        key={index}
        style={{
          color: isVisible ? finalColor : initialColor,
          transition: "color 0.1s ease " + index * 0.1 + "s",
        }}
      >
        {letter}
      </span>
    ));
  };

  return <div ref={textRef}>{renderLetters()}</div>;
};

export default TextColorTransition;
