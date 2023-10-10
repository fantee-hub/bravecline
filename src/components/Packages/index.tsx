import React, { useState } from "react";
import { packages } from "@/src/utils/utils";
import ShowText from "../ShowText";

const Packages = () => {
  return (
    <section className="lg:pt-14 pt-10 pb-20 px-4 lg:px-0" id="packages">
      <div className="font-caveat lg:text-5xl text-base text-center flex flex-col lg:gap-5 gap-2">
        <div>OUR TRAVELING</div>
        <div className="font-centuryGothic font-bold">PACKAGES</div>
        <div className="lg:text-4xl text-base">
          Are you planning to relocate or acquire work permits in Canada or
          Dubai?
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-14 items-stretch pt-10">
        {packages.map((p) => (
          <ShowText image={p.img} desc={p.desc} title={p.title} key={p.id} />
        ))}
      </div>
    </section>
  );
};

export default Packages;
