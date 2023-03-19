import React, { useContext, useEffect, useState } from "react";
import { ActiveContext } from "../context/ActiveContext";
import { BsCodeSlash } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import Redirect from "./Redirect";

const Projects = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [url, setUrl] = useState("");
  const handleRedirect = (url) => {
    setIsRedirecting(true);
    setUrl(url);
    console.log(isRedirecting);
  };
  const { setActive } = useContext(ActiveContext);
  useEffect(() => {
    setActive("projects");
  }, []);

  const Project = (proj, index) => {
    return (
      <div
        key={index}
        className=" p-2 rounded-[1rem] shadow-md flex flex-col gap-2 rounded-[1rem]"
      >
        <div className="font-bold  ">{proj.title}</div>
        <div className="desc text-sm">{proj.desc}</div>
        <div className="flex  gap-8">
          <CgWebsite
            onClick={() => handleRedirect(proj.hostURL)}
            className="w-6 h-6 md:cursor-pointer hover:text-green-500 ease-in-out duration-300 "
          />
          <BsCodeSlash
            onClick={() => handleRedirect(proj.gitURL)}
            className="w-6 h-6 md:cursor-pointer hover:text-green-500 ease-in-out duration-300"
          />
        </div>
      </div>
    );
  };

  const projectData = [
    {
      title: "Social Media",
      desc: "MERN social media project.",
      hostURL: "https://social-jifg.onrender.com/",
      gitURL: "https://github.com/sijan17/social-frontend.git",
    },
    {
      title: "Chess",
      desc: "React.Js Chess Game.",
      hostURL: "https://sijan17.github.io/chessgame",
      gitURL: "https://github.com/sijan17/chessgame.git",
    },
    {
      title: "CMS",
      desc: "College Management System.",
      hostURL: "https://cms-swastik.rf.gs",
      gitURL: "https://github.com/sijan17/cms-swastik.git",
    },
    {
      title: "Ecommerce",
      desc: "Single Vendor Ecommerce.",
      hostURL: "https://ecommerce.sijan-paudel.com.np",
      gitURL: "https://github.com/sijan17/ecommerce.git",
    },
    {
      title: "UURL",
      desc: "URL Shortner.",
      hostURL: "https://test.sijan-paudel.com.np",
      gitURL: "https://github.com/sijan17/uurl.git",
    },
    {
      title: "Snakegame",
      desc: "React.Js Snake Game",
      hostURL: "https://sijan17.github.io/snakegame",
      gitURL: "https://github.com/sijan17/snakegame.git",
    },
  ];

  return (
    <div className=" md:p-8 md:w-[50%] lg:w-[40%]   flex flex-col items-center b  w-full   p-4 gap-4 justify-end w-screen overflow-hidden ">
      <div className="text-2xl font-bold">Work</div>
      <div className="h-screen w-screen md:w-full md:h-full backdrop-blur-lg ">
        <div className="   rounded-[0.4rem]">
          <div className=" p-4 grid gap-4 grid-cols-2 max-h-[70vh] scroll overflow-y-scroll">
            {projectData.map((proj, index) => Project(proj, index))}
          </div>
        </div>
      </div>
      {isRedirecting && url ? (
        <Redirect to={url} setIsRedirecting={setIsRedirecting} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Projects;
