import React, { useContext, useEffect } from "react";
import { ActiveContext } from "../context/ActiveContext";
import { BsCodeSlash } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const Projects = () => {
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
          <a href={proj.hostURL}>
            <CgWebsite className="w-6 h-6" />
          </a>
          <a href={proj.gitURL}>
            <BsCodeSlash className="w-6 h-6" />
          </a>
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
      hostURL: "https://uurl.rf.gd",
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
    <div className="flex flex-col items-center b  w-screen  justify-center p-4 gap-4 lg:absolute lg:w-[30%] lg:right-[5%] lg:top-[5%] ">
      <div className="text-2xl font-bold">Work</div>
      <div className="h-screen  shadow-lg backdrop-blur-lg rounded-[0.4rem] lg:h-full">
        <div className=" w-screen p-4 grid gap-4 grid-cols-2   lg:w-full">
          {projectData.map((proj, index) => Project(proj, index))}

          {/* <div className=" p-2 rounded-[1rem] flex flex-col gap-2 ">
            <div className="font-bold   ">Social Media</div>
            <div className="desc text-sm">MERN social media project.</div>
            <div className="flex  gap-8">
              <CgWebsite className="w-6 h-6" />{" "}
              <BsCodeSlash className="w-6 h-6" />
            </div>
          </div>
          <div className=" p-2 rounded-[1rem] flex flex-col gap-2 rounded-[1rem]">
            <div className="font-bold  ">Chess</div>
            <div className="desc text-sm">React.Js Chess Game.</div>
            <div className="flex  gap-8">
              <CgWebsite className="w-6 h-6" />{" "}
              <BsCodeSlash className="w-6 h-6" />
            </div>
          </div>
          <div className=" p-2 rounded-[1rem] flex flex-col gap-2 rounded-[1rem]">
            <div className="font-bold  ">CMS</div>
            <div className="desc text-sm">PHP College Management System</div>
            <div className="flex  gap-8">
              <CgWebsite className="w-6 h-6" />{" "}
              <BsCodeSlash className="w-6 h-6" />
            </div>
          </div>
          <div className=" p-2 rounded-[1rem] flex flex-col gap-2 rounded-[1rem]">
            <div className="font-bold  ">Ecommerce</div>
            <div className="desc text-sm">PHP Single Vendor Ecommerce.</div>
            <div className="flex  gap-8">
              <CgWebsite className="w-6 h-6" />{" "}
              <BsCodeSlash className="w-6 h-6" />
            </div>
          </div>
          <div className=" p-2 rounded-[1rem] flex flex-col gap-2 rounded-[1rem]">
            <div className="font-bold  ">UURL</div>
            <div className="desc text-sm">URL Shortner.</div>
            <div className="flex  gap-8">
              <CgWebsite className="w-6 h-6" />{" "}
              <BsCodeSlash className="w-6 h-6" />
            </div>
          </div>
          <div className=" p-2 rounded-[1rem] flex flex-col gap-2 rounded-[1rem]">
            <div className="font-bold  ">SnakeGame</div>
            <div className="desc text-sm">React.Js Snakegame.</div>
            <div className="flex  gap-8">
              <CgWebsite className="w-6 h-6" />{" "}
              <BsCodeSlash className="w-6 h-6" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
