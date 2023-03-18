import React, { useContext, useEffect } from "react";
import { ActiveContext } from "../context/ActiveContext";

const Contact = () => {
  const { setActive } = useContext(ActiveContext);
  useEffect(() => {
    setActive("contact");
  }, []);
  return (
    <div className="flex flex-col items-center  w-full justify-center p-4 gap-4 lg:absolute lg:w-[30%] lg:right-[5%] lg:top-[10%]">
      <div className="text-2xl font-bold">Say Hello !</div>
      <div className="text-center w-screen backdrop-blur-lg p-2 rounded-[0.2rem] py-4 lg:w-full">
        <form className="peoject w-full flex flex-col gap-4 px-4 h-screen lg:h-full">
          <input
            type="text"
            placeholder="Your Name"
            className=" bg-transparent border border-black p-2 w-full rounded-[0.4rem] focus:outline-none focus:border-green-400"
          />
          <textarea
            className="bg-transparent border border-black w-full p-2 rounded-[0.4rem] focus:outline-none focus:border-green-400"
            rows="5"
            placeholder="Hi, Sijan."
          ></textarea>

          <button className="border border-black p-2 rounded-[0.4rem] focus:outline-none focus:border-green-400 ">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
