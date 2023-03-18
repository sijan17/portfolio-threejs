import React, { useContext, useEffect } from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { ActiveContext } from "../context/ActiveContext";
const Getintouch = () => {
  const { setActive } = useContext(ActiveContext);
  useEffect(() => {
    setActive("getintouch");
  }, []);
  return (
    <div className="flex flex-col items-center w-full justify-center p-4 gap-4 lg:absolute lg:w-[30%] lg:right-[5%] lg:top-[30%]">
      <div className="text-2xl font-bold">Get in Touch</div>
      <div className=" backdrop-blur-sm p-2 rounded-[0.2rem] w-full flex items-center justify-center ">
        <div className="twitter flex items-center gap-4">
          <AiOutlineTwitter className="h-8 w-8 " />{" "}
          <AiOutlineLinkedin className="h-8 w-8 " />{" "}
          <AiOutlineGithub className="h-8 w-8 " />
          <AiOutlineMail className="h-8 w-8 " />
        </div>
      </div>
      <div className="text-sm">
        <div className="">
          Model from{" "}
          <a className="text-blue-600" href="https://www.mixamo.com/">
            Mixamo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
