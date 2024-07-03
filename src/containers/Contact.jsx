import React, { useState } from "react";
import Alert from "./Alert";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";
import { AnimatePresence } from "framer-motion";

const Contact = () => {
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    isAlert: false,
    message: "",
    status: null,
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    // update state
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendMesage = async () => {
    if (data.email === "" || data.email === null) {
      setAlert({
        isAlert: true,
        message: "Email is required",
        status: "warning",
      });
      setInterval(() => {
        setAlert({ isAlert: false, message: "", status: null });
      }, 4000);
    } else {
      await addDoc(collection(db, "messages"), { ...data })
        .then(() => {
          setAlert({
            isAlert: true,
            message: "Message sent successfully",
            status: "success",
          });
          setInterval(() => {
            setAlert({ isAlert: false, message: "", status: null });
          }, 4000);
          setdata({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          setAlert({ isAlert: true, message: error.message, status: "danger" });
          setInterval(() => {
            setAlert({ isAlert: false, message: "", status: null });
          }, 4000);
        });
    }
  };
  return (
    <section
      id="contact"
      className="flex  items-center justify-center flex-col gap-12 relative  w-full h-full px-4 lg:px-0"
    >
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
      </AnimatePresence>
      <div className="w-full h-full flex items-center justify-center mt-12 lg:mt-28 ">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Contact
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-start gap-4 ">
        <div className="w-full lg:2-[600px] p-2 flex flex-col items-center justify-start gap-4 px-9 lg:px-0">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleTextChange}
              placeholder="First Nmae"
              className="w-full px-4 py-3 rounded-md border text-texlight border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary"
            />
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleTextChange}
              placeholder="Last Nmae"
              className="w-full px-4 py-3 rounded-md border text-texlight border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary"
            />
          </div>

          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleTextChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border text-texlight border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary"
          />

          <textarea
            name="message"
            id=""
            cols=""
            rows="10"
            value={data.message}
            onChange={handleTextChange}
            className="w-full px-4 py-3 rounded-md border text-texlight border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary"
            placeholder="Message here..."
          ></textarea>
          <div className="w-full flex items-center justify-center lg:justify-end ">
            <button
              className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary "
              onClick={sendMesage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Contact;
