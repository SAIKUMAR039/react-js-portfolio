import React from "react";
import ServiceCard from "../components/ServiceCard";

const ServiceCount = () => {
  return (
    <div className="wfull py-6 lg:py-24 lg:-mt-24 flex items-center justify-center flex-wrap gap-8">
      <ServiceCard count="2+" text={"Years of Experience"} />
      <ServiceCard count="20+" text={"Happy Clients"} />

      <ServiceCard count="10+" text={"Full Stack Projects"} />
    </div>
  );
};

export default ServiceCount;
