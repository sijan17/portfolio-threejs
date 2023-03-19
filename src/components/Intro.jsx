import React, { useContext, useEffect } from "react";
import { ActiveContext } from "../context/ActiveContext";
import { FiDownload } from "react-icons/fi";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiExpress,
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiThreedotjs,
} from "react-icons/si";
import MovableText from "../helpers/MovableText";

const Intro = () => {
  const { setActive } = useContext(ActiveContext);
  useEffect(() => {
    setActive("intro");
  }, []);

  return (
    <div className="md:p-8 md:w-[40%] flex flex-col items-center w-full  justify-center p-4 gap-4 ">
      <div className="text-2xl font-bold">
        <MovableText text="About Me" />
      </div>
      <div className="text-center  p-2 rounded-[0.2rem]">
        Student, Web Developer.
      </div>
      <div className="text-blue flex justify-between items-center w-full">
        <SiHtml5 className="h-5 w-5 inline" />
        <SiCss3 className="h-5 w-5 inline" />{" "}
        <SiJavascript className="h-5 w-5 inline" />
        <SiReact className="h-5 w-5 inline" />
        <SiNodedotjs className="h-5 w-5 inline" />{" "}
        <SiMongodb className="h-5 w-5 inline" />
        <SiPhp className="h-5 w-5 inline" />
        <SiMysql className="h-5 w-5 inline" />{" "}
        <SiExpress className="h-5 w-5 inline" />
        <SiTailwindcss className="h-5 w-5 inline" />
        <SiThreedotjs className="h-5 w-5 inline" />
      </div>
      <div className="">
        <a href="/assets/pdf/resume_sijan.pdf">
          <div className="flex gap-2 p-2 items-center border border-black rounded-[0.4rem]  hover:bg-green-400 ease-in-out duration-300">
            <FiDownload className="w-5 h-5" />
            <span> CV</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Intro;
