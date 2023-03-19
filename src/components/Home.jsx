import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ActiveContext } from "../context/ActiveContext";
import Redirect from "./Redirect";

const Home = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const { setActive } = useContext(ActiveContext);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [url, setUrl] = useState("");
  const handleRedirect = (url) => {
    setIsRedirecting(true);
    setUrl(url);
    console.log(isRedirecting);
  };
  useEffect(() => {
    setActive("home");
  }, []);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const { data } = await axios.get(
        "https://api.quotable.io/random?tags=famous-quotes&maxLength=70"
      );
      if (data.content) {
        setData(data);
      }
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <div className="md:p-8 md:w-[40%] flex flex-col text-center items-ceter w-full justify-center p-4 ">
      <div className="text-2xl font-bold"></div>
      <div className=" italic px-2">
        {loading ? "Loading a quote..." : ""}
        {data && `"${data.content}"`}
        <br />
        <span className="font-bold"> {data && `-${data.author}`}</span>
        <br />
        <span className="text-sm">(Random from</span>
        <span
          onClick={() =>
            handleRedirect("https://github.com/lukePeavey/quotable")
          }
          className="md:cursor-pointer text-sm  text-blue-500 ml-2"
        >
          Quotable)
        </span>
      </div>
      {isRedirecting && url ? (
        <Redirect to={url} setIsRedirecting={setIsRedirecting} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
