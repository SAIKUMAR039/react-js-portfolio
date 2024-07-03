import React from "react";
import {  motion } from "framer-motion";
const Alert = ({ status, message }) => {
  const statusConfig = {
    success: {
      bgColor: "bg-green-500",
      textColor: "text-white",
      borderColor: "border-green-500",
    },
    warning: {
      bgColor: "bg-red-500",
      textColor: "text-white",
      borderColor: "border-red-500",
    },
    danger: {
      bgColor: "bg-red-500",
      textColor: "text-white",
      borderColor: "border-red-500",
    },
  };
  const config = statusConfig[status];
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      className={`fixed top-11 right-12 px-3 py-3 rounded-md border ${config.borderColor}  w-auto overflow-hidden backdrop-blur-md`}
    >
      <p className={`${config.textColor}`}>{message}</p>
      <div className="absolute inset-x-0 h-1 bottom-0 bg-[rgba(255,255,255,0.5)]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ width: 0 }}
          transition={{ duration: 4, delay: 0.5 }}
          className={`${config.bgColor} h-full`}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Alert;
