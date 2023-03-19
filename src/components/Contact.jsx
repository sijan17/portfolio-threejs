import React, { useContext, useEffect, useRef, useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { ActiveContext } from "../context/ActiveContext";
import emailjs from "@emailjs/browser";
import Redirect from "./Redirect";

const Contact = () => {
  const { setActive } = useContext(ActiveContext);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [url, setUrl] = useState("");
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [messageSent, setMessageSent] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const form = useRef();

  const handleRedirect = (url) => {
    setIsRedirecting(true);
    setUrl(url);
    console.log(isRedirecting);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    const { name, message } = formData;
    e.preventDefault();
    if (name && message) {
      setIsSending(true);
      setEmptyError(false);
      emailjs
        .sendForm(
          "service_qcvilcy",
          "template_k5wf2a9",
          form.current,
          "t0v8p_cwynY-UK2Ut"
        )
        .then(
          (result) => {
            setIsSending(false);
            setMessageSent(true);
            setMessageFailed(false);

            setFormData({ name: "", message: "" });
          },
          (error) => {
            setIsSending(false);
            setMessageFailed(true);
            setMessageSent(false);
          }
        );
    } else {
      setEmptyError(true);
      setMessageSent(false);
      setMessageFailed(false);
    }
  };

  useEffect(() => {
    setActive("contact");
    setMessageSent(false);
    setEmptyError(false);
    setMessageFailed(false);
  }, []);
  return (
    <div className="md:p-8 md:w-[35%]  flex flex-col items-center  w-full justify-center p-4 gap-4 ">
      <div className="text-2xl font-bold">Say Hello !</div>
      <div className="h-screen w-screen md:w-full md:h-full backdrop-blur-lg shadow-md rounded-[1em]">
        <div className="text-center w-full  p-2 rounded-[0.2rem] py-4 flex flex-col gap-8">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="project w-full flex flex-col gap-4 px-4 "
          >
            <input
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
              value={formData.name}
              placeholder="Your Name"
              className=" bg-transparent border border-black p-2 w-full rounded-[0.4rem] focus:outline-none focus:border-green-400"
            />
            <textarea
              name="message"
              onChange={(e) => handleChange(e)}
              value={formData.message}
              className="bg-transparent border border-black w-full p-2 rounded-[0.4rem] focus:outline-none focus:border-green-400"
              rows="5"
              placeholder="Hi, Sijan."
            ></textarea>

            <button className="border border-black p-2 rounded-[0.4rem] focus:outline-none focus:border-green-400 ">
              {isSending ? "Sending" : "Send"}
            </button>
            {messageSent && (
              <div className=" font-bold">Thank you for your message.</div>
            )}
            {messageFailed && (
              <div className=" font-bold text-red-500">
                Sorry, an error occured.
              </div>
            )}
            {emptyError && (
              <div className=" font-bold text-red-500">
                Please fill up all fields.
              </div>
            )}
          </form>
          <div className="  flex flex-col items-center justify-center p-4 gap-4 ">
            <div className=" flex items-center justify-center ">
              <div className=" flex items-center gap-4">
                <AiOutlineTwitter
                  onClick={() => handleRedirect("https://twitter.com/s1j4n")}
                  className="h-8 w-8 md:cursor-pointer hover:text-green-700 ease-in-out duration-300 "
                />

                <AiOutlineLinkedin
                  onClick={() =>
                    handleRedirect("https://linkedin.com/in/sijan1")
                  }
                  className="h-8 w-8 md:cursor-pointer hover:text-green-700 ease-in-out duration-300 "
                />
                <AiOutlineGithub
                  onClick={() => handleRedirect("https://github.com/sijan17")}
                  className="h-8 w-8 md:cursor-pointer hover:text-green-700 ease-in-out duration-300 "
                />
                {/* <AiOutlineMail  className="h-8 w-8 md:cursor-pointer hover:text-green-700 ease-in-out duration-300 " /> */}
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

export default Contact;
