import React, { useContext, useEffect } from "react";
import { ActiveContext } from "../context/ActiveContext";
const Last = () => {
  const { setActive } = useContext(ActiveContext);
  useEffect(() => {
    setActive("last");
  }, []);
  useEffect(() => {
    const myTags = [
      "Series",
      "Travel",
      "Cricket",
      "17",
      "Animation",
      "Design",
      "Nepal",
      "Hacking",
      "Chess",
      "React",
      "Tailwind",
      "PHP",
      "Games",
      "Javascript",
      "NodeJs",
      "MySQL",
      "Express",
      "Python",
      "MongoDB",
      "C",
      "Java",
      "C#",
      "Three.Js",
      ".NET",
      "Peace",
      "Tea",
      "Mountain",
      "Git",
    ];

    var tagCloud = TagCloud(
      ".content",
      myTags,
      {
        radius: 250,
        maxSpeed: "medium",
        initSpeed: "medium",
        direction: 135,

        keep: true,
      },
      []
    );

    let color = "#000000";
    document.querySelector(".content").style.color = color;
  });
  return (
    <div className="md:p-8 md:w-[40%] flex flex-col items-center w-full md:absolute md:right-[5%]  justify-center p-4 gap-4 overflow-hidden  ">
      <div className="text-2xl font-bold">Thank You !</div>

      <div className="content  overflow-hidden max-h-[60vh] "></div>
    </div>
  );
};

export default Last;
