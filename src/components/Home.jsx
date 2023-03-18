import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { SiTeradata } from "react-icons/si";
import { ActiveContext } from "../context/ActiveContext";

const Home = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const { setActive } = useContext(ActiveContext);
  useEffect(() => {
    setActive("home");
  }, []);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const { data } = await axios.get(
        "https://api.quotable.io/random?tags=famous-quotes"
      );
      if (data.content) {
        setData(data);
      }
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <div className="flex flex-col text-center items-ceter w-full justify-center py-4 lg:absolute lg:w-[30%] lg:right-[5%] lg:top-[40%]">
      <div className="text-2xl font-bold"></div>
      <div className="text-xl italic">
        {loading ? "Loading quote..." : ""}
        {data && `"${data.content}`}
        <br />
        <span className="font-bold"> {data && `-${data.author} `} </span>
      </div>
    </div>
  );
};

export default Home;
