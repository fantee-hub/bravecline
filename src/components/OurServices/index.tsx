import React, { useState } from "react";
import { faqs } from "@/src/utils/utils";
import Accordion from "./Accordion";

const OurServices = () => {
  const [currentOpen, setCurrentOpen] = useState(false);
  return (
    <section className="max-w-[1472px] 2xl:mx-auto lg:px-10 px-4 mx-auto relative pt-10 pb-20">
      <div className="font-caveat lg:text-5xl text-xl text-center">
        <div>Our Service</div>
        <div className="lg:text-3xl text-base">
          Our free international study application supports includes:
        </div>
      </div>
      <div className="flex justify-center items-center mt-14 gap-10 lg:flex-row flex-col">
        <div className="flex flex-col gap-2 pt-5 lg:pt-0 flex-1">
          {faqs.map((item, index) => (
            <Accordion
              key={item.id}
              currentOpen={currentOpen}
              setCurrentOpen={setCurrentOpen}
              num={index}
              title={item.title}
              btn={item.buttonText}
            >
              {item.answer}
            </Accordion>
          ))}
        </div>
        <div className="flex-1">
          <img src="/assets/consult-illustration.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
