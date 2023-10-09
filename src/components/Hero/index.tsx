import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-no-repeat w-full h-screen 4xl:h-[60vh] flex items-center bg-cover text-white px-10">
      <div className="max-w-[60rem] flex flex-col gap-5">
        <div className="text-5xl font-bold">STUDY ABROAD</div>
        <div className="text-3xl leading-[1.3]">
          Studying abroad applications used to be a complex process.
          <br /> We assist with eligibility criteria, course selection, and
          application procedures.
        </div>
      </div>
    </div>
  );
};

export default Hero;
