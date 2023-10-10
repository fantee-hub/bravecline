import React, { useState } from "react";
import { packages } from "@/src/utils/utils";

const Packages = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="lg:pt-14 pt-10 pb-20 px-4 lg:px-0">
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
          <div
            key={p.id}
            className="w-[350px] card-shadow rounded overflow-hidden relative"
          >
            <div>
              <img src={p.img} alt={p.title} />
            </div>
            <div className="p-4 text-sm pb-14">
              <div className="pb-3 font-bold">{p.title}</div>
              <div className="leading-[1.8] lg:text-base text-xs">
                {isExpanded
                  ? p.desc
                  : p.desc.split(" ").slice(0, 20).join(" ") + "..."}
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <button
                className="lg:bg-slate-900 bg-white lg:text-base text-xs rounded lg:text-white text-slate-900 outline-none p-1"
                onClick={() => setIsExpanded((exp) => !exp)}
              >
                {isExpanded ? "SHOW LESS" : "READ MORE"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
