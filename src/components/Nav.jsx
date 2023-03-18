import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineProject, AiOutlineContacts } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { ActiveContext } from "../context/ActiveContext";

const Nav = () => {
  const { active } = useContext(ActiveContext);
  return (
    <div class="nav flex md:flex-col md:top-0 absolute z-[100] bottom-[5%] w-full md:w-[30%] items-center justify-around   p-2 rounded-full">
      <Link
        to="/"
        className={`p-2 border ${
          active == "home" ? "bg-green-400" : "border-green-600"
        } rounded-full`}
      >
        <span className="">
          <BiHomeAlt className={`w-6 h-6`} />
        </span>
      </Link>
      <Link
        className={`p-2 border ${
          active == "intro" ? "bg-green-400" : "border-green-600"
        } rounded-full`}
        to="/intro"
      >
        <span>
          <CgProfile className={`w-6 h-6 `} />
        </span>
      </Link>
      <Link
        className={`p-2 border ${
          active == "projects" ? "bg-green-400" : "border-green-600"
        } rounded-full`}
        to="/projects"
      >
        <span>
          <AiOutlineProject className={`w-6 h-6 `} />
        </span>
      </Link>
      <Link
        className={`p-2 border ${
          active == "contact" ? "bg-green-400" : "border-green-600"
        } rounded-full`}
        to="/contact"
      >
        <span>
          <AiOutlineContacts className={`w-6 h-6 `} />
        </span>
      </Link>
      <Link
        className={`p-2 border ${
          active == "getintouch" ? "bg-green-400" : "border-green-600"
        } rounded-full`}
        to="getintouch"
      >
        <span>
          <GiSkills className={`w-6 h-6 `} />
        </span>
      </Link>
    </div>
  );
};

export default Nav;
