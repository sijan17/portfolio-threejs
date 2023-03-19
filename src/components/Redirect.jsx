import React from "react";

const Redirect = ({ to, setIsRedirecting }) => {
  const handleGoBack = () => {
    setIsRedirecting(false);
  };
  return (
    <div className="absolute-center  h-screen w-screen md:h-full md:w-full bg-opacity-50 backdrop-blur-lg ">
      <div className="absolute-center bg-green-400 p-4 w-[80%] md:float-right md:w-[30%] rounded-[1em] flex flex-col gap-4 text-center">
        <div className="text-red-500 font-bold text-center">
          You will be redirected to:
        </div>
        <div className="text-blue-700 break-words">{to}</div>
        <div className="flex w-full items-center justify-between">
          <div
            onClick={handleGoBack}
            className="p-2 text-sm md:cursor-pointer border border-black rounded-[0.4rem] hover:bg-blue-400  ease-in-out duration-300"
          >
            Go Back
          </div>
          <a href={to}>
            <div className="text-sm p-2 border border-black rounded-[0.4rem] hover:bg-red-400  ease-in-out duration-300">
              Proceed
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
